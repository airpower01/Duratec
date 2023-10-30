import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";


import App from "./App.vue";
import router from "./router";

// pindah ke folder helper



const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(router);
app.use(pinia);

import './helper/FirebaseAuth'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

app.mount("#app");
