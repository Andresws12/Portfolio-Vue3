import { createWebHistory, createRouter } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home Page -  App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page.',
        },
        {
          property: 'og:description',
          content: 'The home page.',
        },
      ],
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.name ? to.name.toString() : 'Portfolio';
  next();
});

export default router;
