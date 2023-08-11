import Vue from "vue";
import App from "./App.vue";
import VueResourse from "vue-resource";
import { routes } from "./routes";
import VueRouter from "vue-router";

Vue.use(VueResourse);
Vue.use(VueRouter);

const router = new VueRouter({ routes: routes, mode: "history" });
export const busEvent = new Vue();
new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
