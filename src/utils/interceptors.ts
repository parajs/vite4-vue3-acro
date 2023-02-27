// import store from '@/store';
// import { getLanguage } from '@/utils';
import axios from 'axios';

// request interceptor
axios.interceptors.request.use(
  (config) => {
    const { userToken } = storeToRefs(useUserStore());
    const { currentLocale } = useAcroDesiginLocale();
    // do something before request is sent
    if (userToken.value) {
      // let each request carry token
      config.headers.Authorization = `Bearer ${userToken.value}`;
    }
    config.headers.locale = currentLocale.value;
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
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
        const { exit } = useUserStore();
        exit();
      }

      return Promise.reject(res.msg || 'Error');
    }

    return res.data;
  },
  (error) => {
    console.error('err' + error);
    messageError(error.message);
    return Promise.reject(error.message);
  }
);
