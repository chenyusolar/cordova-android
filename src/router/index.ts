import { createRouter, createWebHashHistory } from 'vue-router'
import ChatView from '@/views/ChatView/ChatView.vue'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, 
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    }
  ]
})

export default router
