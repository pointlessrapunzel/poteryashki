import App from './App.vue';
import { createApp } from 'vue';
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

const vuetify = createVuetify({
  components,
  directives,
});
app.component('easy-date-table', Vue3EasyDataTable);

loadFonts();
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
