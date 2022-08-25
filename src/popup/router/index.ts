import { 
  createRouter, 
  createWebHashHistory, 
  RouterOptions,
  Router, 
  RouteRecordRaw 
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/popup/login.vue'),
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('@/popup/popup.vue'),
  },
];

const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}

const router: Router = createRouter(options)
export default router