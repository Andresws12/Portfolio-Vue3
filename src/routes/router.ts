import { createWebHistory, createRouter } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/works/',
    name: 'works',
    children: [
      {
        path: 'iskaypet',
        name: 'iskaypet',
        component: () => import('@/views/works/IskaypetView.vue'),
      },
      {
        path: 'cloudappi',
        name: 'cloudappi',
        component: () => import('@/views/works/CloudappiView.vue'),
      },
      {
        path: 'star',
        name: 'star',
        component: () => import('@/views/works/StarView.vue'),
      },
      {
        path: 'pantallazo',
        name: 'pantallazo',
        component: () => import('@/views/works/PantallazoView.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
  routes,
});

export default router;
