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
    component: () => import('@/popup/view/login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/popup/view/index.vue'),
  },
];

const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}

const router: Router = createRouter(options)
export default router