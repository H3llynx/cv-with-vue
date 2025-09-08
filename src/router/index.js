import { createRouter, createWebHistory } from 'vue-router';
import CvPage from '../views/ContentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/cv/en'
    },
    {
      path: '/cv/:lang',
      name: 'cv',
      component: CvPage,
    }
  ]
})

export default router
