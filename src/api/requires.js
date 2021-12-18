import Vue from "vue";
import axios from "axios";
import store from "../store";
import { Promise } from "core-js";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Progress 進度條樣式

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log("你要找的頁面不存在");
          // go to 404 page
          break;
        case 500:
          console.log("程式發生問題");
          // go to 500 page
          break;
        default:
          console.log(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

export default service;
