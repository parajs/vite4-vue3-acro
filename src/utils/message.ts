import { Message, type MessageConfig } from '@arco-design/web-vue';
import type { AppContext } from 'vue';

export function messageInfo(
  config: string | MessageConfig,
  appContext?: AppContext
) {
  return Message.info(config, appContext);
}

export function messageSuccess(
  config: string | MessageConfig,
  appContext?: AppContext
) {
  return Message.success(config, appContext);
}

export function messageWarning(
  config: string | MessageConfig,
  appContext?: AppContext
) {
  return Message.warning(config, appContext);
}

export function messageError(
  config: string | MessageConfig,
  appContext?: AppContext
) {
  return Message.error(config, appContext);
}

export function messageLoading(
  config: string | MessageConfig,
  appContext?: AppContext
) {
  return Message.loading(config, appContext);
}

export function messageNormal(
  config: string | MessageConfig,
  appContext?: AppContext
) {
  return Message.normal(config, appContext);
}
