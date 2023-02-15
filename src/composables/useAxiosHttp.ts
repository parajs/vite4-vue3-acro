// import store from '@/store';
// import { getLanguage } from '@/utils';
import { useAxios, type UseAxiosOptions } from '@vueuse/integrations/useAxios';
import axios, { type AxiosRequestConfig } from 'axios';

// create an axios instance
const instance = axios.create({
    withCredentials: false
});

// request interceptor
instance.interceptors.request.use(
    (config) => {
        // do something before request is sent
        const token = '';
        if (token) {
            // let each request carry token
            config.headers.Authorization = `Bearer ${token}`
        }

        config.headers.locale = ''
        return config;
    },
    (error) => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
instance.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response) => {
        const res = response.data;
        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            messageError(res.msg);
            // 401: Token expired;
            if (res.code === 401) {

            }

            return Promise.reject(res.msg || 'Error');
        } else {
            return res;
        }
    },
    (error) => {
        console.log('err' + error);
        messageError(error.message);
        return Promise.reject(error.message);
    }
);

/**
 * reactive useFetchApi
 */

export default function useAxiosHttp(url: string, config: AxiosRequestConfig, options: UseAxiosOptions = { immediate: true }) {
    return useAxios(url, config, instance, options);
}

