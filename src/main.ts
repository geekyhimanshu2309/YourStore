// main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { usePersistCart } from './store/localStorage';
import './style.css';
import App from './App.vue';
import router from "./router";
import { auth } from './firebase/authentication';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$auth = auth;


app.use(router);
app.use(pinia);

usePersistCart();

app.mount('#app');