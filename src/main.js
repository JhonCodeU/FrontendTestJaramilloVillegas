import { createApp } from "vue";
import App from "./App.vue";

import { router } from "./routes";

import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

createApp(App).use(router).mount("#app");
