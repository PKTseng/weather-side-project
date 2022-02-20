import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api/index";
import "bootstrap/scss/bootstrap.scss";
import VueTailwind from "vue-tailwind";

Vue.use(VueTailwind);
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
