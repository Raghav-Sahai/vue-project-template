import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import App from "./App.vue";

import "./style.css";

const pinia = createPinia();
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
