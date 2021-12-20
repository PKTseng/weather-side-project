import Vue from 'vue';
// import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api/index';

Vue.prototype.$api = api;
// Vue.prototype.$api = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
