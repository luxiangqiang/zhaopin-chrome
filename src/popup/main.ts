import { createApp } from 'vue';
import router from './router';
import ElementUI from 'element-plus';
import 'element-plus/theme-chalk/index.css';

import store from './store';
import App from './App.vue';
const app = createApp(App)
app
   .use(ElementUI, { size: 'mini' })
   .use(store)
   .use(router)
   .mount('#app');



   