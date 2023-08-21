import { createPersistedState } from 'pinia-plugin-persistedstate';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import router from './routes/router';
import i18n from './localization';

import './styles/main.scss';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);
const head = createHead();

pinia.use(
  createPersistedState({
    auto: true,
  })
);
app.use(pinia).use(head).use(i18n).use(router);
app.mount('#app');
