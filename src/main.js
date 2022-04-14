import Vue from 'vue';
import VueTailwind from 'vue-tailwind';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api/index';

import '@/assets/css/tailwind.css';

Vue.use(VueTailwind);
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
