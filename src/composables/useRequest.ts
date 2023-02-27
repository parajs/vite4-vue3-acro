import type { Ref, UnwrapRef } from 'vue';

export type RequestService<TData, TParams extends unknown[]> = (
  ...args: TParams
) => Promise<TData>;

export type RequestOptions<TData, TParams extends unknown[]> = {
  [K in keyof RequestBasicOptions<TData, TParams>]: RequestBasicOptions<
    TData,
    TParams
  >[K];
};

export interface RequestBasicOptions<TData, TParams extends unknown[]> {
  /**
   * Init data.
   */
  initialData?: TData;

  /**
   * 	The parameters passed to the service at the first default execution
   */
  defaultParams?: TParams;

  /**
   * - The default is `true.` That is, the service is automatically executed during initialization.
   * - f set to `false`, you need to manually call `execute` to trigger execution.
   */
  auto?: boolean;

  /**
   * Triggered when service resolve.
   * @param data TData
   * @param params TParams
   * @returns void
   */
  onSuccess?: (data: TData, params: TParams) => void;

  /**
   * Triggered when service reject.
   * @param e Error
   * @param params TParams
   * @returns void
   */
  onError?: (e: Error, params: TParams) => void;

  /**
   * Triggered when service execution is complete.
   * @param params TParams
   * @param data TData
   * @param e Error
   * @returns void
   */
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
}

export interface RequestResult<TData, TParams extends unknown[]> {
  /**
   * Is the service being executed.
   */
  isLoading: Ref<boolean>;

  /**
   * Data returned by service.
   */
  data: Ref<TData | undefined>;

  /**
   * 	Exception thrown by service.
   */
  error: Ref<Error | undefined>;

  /**
   * params	An array of parameters for the service being executed. For example, you triggered `run(1, 2, 3)`, then params is equal to `[1, 2, 3]`.
   */
  params: Ref<TParams | []>;

  /**
   * Manually trigger the execution of the service, and the parameters will be passed to the service.
   */
  run: (...params: TParams) => void;

  /**
   * Automatic handling of exceptions, feedback through `onError`
   */
  runAsync: (...params: TParams) => Promise<TData>;

  /**
   * Use the last params, call `run` again.
   */
  refresh: (...params: TParams) => void;

  /**
   * Use the last params, call `runAsync` again.
   */
  refreshAsync: (...params: TParams) => Promise<TData>;
}

function useRequestImpl<TData, TParams extends unknown[] = unknown[]>(
  service: RequestService<TData, TParams>,
  options: RequestOptions<TData, TParams> = {}
) {
  // Get Config
  const {
    initialData = undefined,
    auto = true,
    defaultParams,
    onSuccess,
    onError,
    onFinally,
  } = options;

  // Fetch State
  const state = reactive({
    isLoading: false,
    params: defaultParams,
    error: undefined,
  });

  const data = shallowRef(initialData);
  const normalDefaultParams = (defaultParams || []) as TParams;
  let lastParams = normalDefaultParams;

  const runAsync = async (...params: TParams) => {
    const p = params.length ? params : normalDefaultParams;
    lastParams = p;

    state.params = p as UnwrapRef<typeof p>;
    state.isLoading = true;
    try {
      const res = await service(...p);
      data.value = res;
      state.error = undefined;
      onSuccess?.(res, p);
      onFinally?.(p, res);
      return res;
    } catch (error: any) {
      state.error = error;
      onError?.(error, params);
      onFinally?.(p, undefined, error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  };

  const run = (...params: TParams) => {
    runAsync(...params).catch((error) => {
      if (!onError) {
        console.error(error);
      }
    });
  };

  // Auto request
  if (auto) {
    run(...normalDefaultParams);
  }

  return {
    ...toRefs(state),

    data,

    run,

    runAsync,

    refresh() {
      run(...lastParams);
    },

    refreshAsync() {
      return runAsync(...lastParams);
    },
  };
}

export default function useRequest<
  TData,
  TParams extends unknown[] = unknown[]
>(
  service: RequestService<TData, TParams>,
  options?: RequestOptions<TData, TParams>
) {
  return useRequestImpl<TData, TParams>(service, options) as RequestResult<
    TData,
    TParams
  >;
}
