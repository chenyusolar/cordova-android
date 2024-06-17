import { createRouter, createWebHashHistory } from 'vue-router'
import ChatView from '@/views/ChatView/ChatView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatView,
    }
  ]
})

export default router
