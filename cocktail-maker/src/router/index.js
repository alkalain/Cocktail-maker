import { createRouter, createWebHistory } from 'vue-router'
import CocktailHomeView from '../views/CocktailHomeView.vue'
import CocktailHomeNameView from '../views/CocktailHomeNameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CocktailHomeView
    },
    {
      path: '/name',
      name: 'name',
      component: CocktailHomeNameView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
