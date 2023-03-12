import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/second',
      name: 'second',
      component: HomeView
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/third',
      name: 'third',
      component: () => import('../views/Three.vue')
    },
    {
      path: '/fouth',
      name: 'fouth',
      component: () => import('../views/Fouth.vue')
    }
  ]
})

export default router
