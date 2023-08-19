import App from './App.vue';
import { createApp, markRaw } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import { loadFonts } from '@/plugins/webfontloader';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const vuetify = createVuetify({
  components,
  directives,
});
app.component('easy-date-table', Vue3EasyDataTable);

app.config.errorHandler = (err, vm, info) => {
  console.error('Captured in errorHandler:', err, vm, info);
};

app.component('VueDatePicker', VueDatePicker);

loadFonts();
app.use(vuetify);
app.use(pinia);
app.use(router);
app.mount('#app');
