import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/vuesax.js";

import VueAnalytics from 'vue-analytics';
// import Vuesax from "vuesax";

Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css"; //Vuesax styles



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


Vue.use(VueAnalytics, {
  id: 'UA-184230655-1'
})