import axios from 'axios';
import { Promise } from 'core-js';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  },
  withCredentials: true
});

service.interceptors.request.use(
  (config) =>{
    config.headers.Authorization = 'CWB-7B9E0D1E-8FED-45AF-B79A-AFB4BBEE5704'

   return config;
  },

  (error) =>{return Promise.reject(error)} 
);

service.interceptors.response.use(
  (response) =>
    response,
  (error) => {
    if (error.response) {
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
    }
    if (!window.navigator.onLine) {
      alert('網路出了點問題，請重新連線後重整網頁');
      return;
    }
    return Promise.reject(error);
  },
);

export default service;
