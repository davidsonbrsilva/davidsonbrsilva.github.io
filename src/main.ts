import { createApp } from "vue";

import App from "./App.vue";
import Locale from "@locale";

import "./main.css";

createApp(App).use(Locale).mount("#app");
