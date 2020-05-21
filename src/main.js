import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";

Vue.use(Avue);
Vue.config.productionTip = false;
new Vue({
  el: "#BYUI_APP",
  router,
  store,
  render: (h) => h(App),
});
