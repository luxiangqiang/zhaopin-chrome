import { createApp } from 'vue';
import router from './router';
import ElementUI from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import store from './store';
import App from './App.vue';
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component)
 }

app
   .use(ElementUI, { size: 'mini', locale: zhCn })
   .use(store)
   .use(router)
   .mount('#app');



   