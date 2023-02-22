import defaultLayout from '@/layouts/DefaultLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/PageIndex.vue'),
    meta: {
      layout: defaultLayout,
    },
  },
  {
    path: '/animals',
    name: 'animals',
    component: () => import('../views/PageAnimals.vue'),
    meta: {
      layout: defaultLayout,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/PageLogin.vue'),
    meta: {
      layout: EmptyLayout,
    },
  },
];
