import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import { bootstrap } from "bootstrap/dist/js/bootstrap.bundle";
import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router/router";

const app = createApp(App);

app.use(createPinia());
app.use(bootstrap);
app.use(router);

app.mount("#app");
