import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import VueCookies from 'vue-cookies';

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCookies)
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
