import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 50000,
});

service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

service.interceptors.response.use(
  (response) => {
    if (response.data.success) {
      return response.data;
    }

    return Promise.reject(response);
  },
  (error) => {
    console.log(error);
    switch (error.response) {
      case 400:
        console.log(error);
        break;
      case 401:
        // tokenExpire();
        console.log(error);
        break;
      case 403:
        console.log(error);
        break;
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
