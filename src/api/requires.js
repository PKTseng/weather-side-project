import axios from 'axios';
import { Promise } from 'core-js';

const service = axios.create({
  // 打 api 的網址前啜，因為正式開發上有分開發環境跟正式環境，所以不能寫死
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

service.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 404:
        console.log('你要找的頁面不存在');
        // go to 404 page
        break;
      case 500:
        console.log('程式發生問題');
        // go to 500 page
        break;
      default:
        console.log(error.message);
    }

    return Promise.reject(error);
  },
);

export default service;
