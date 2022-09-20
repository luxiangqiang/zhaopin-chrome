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
  {
    path: '/collect-resumes',
    name: 'collect-resumes',
    component: () => import('@/popup/view/collect-resumes.vue'),
  },
];

const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}

const router: Router = createRouter(options)
export default router