import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";


import App from "./App.vue";
import router from "./router";

// pindah ke folder helper

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvRjqwNAbz73fuXjAh-WUjHECHUdlAZ_g",
  authDomain: "duratec-testing.firebaseapp.com",
  projectId: "duratec-testing",
  storageBucket: "duratec-testing.appspot.com",
  messagingSenderId: "671717989059",
  appId: "1:671717989059:web:3ba4fb4ad30a9d5f806076",
  measurementId: "G-ZZ9B8SZBGY"
};

initializeApp(firebaseConfig);

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(router);
app.use(pinia);

import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

app.mount("#app");
