// Composables
import LoginScreenVue from '@/components/LoginScreen.vue'
import GameScreenVue from '@/components/GameScreen.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component:LoginScreenVue
  },
  {
    path: '/juego',
    component:GameScreenVue
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
