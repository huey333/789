import { createRouter, createWebHistory } from 'vue-router'
import KTNavigation from '@/views/HelloKitty/KTNavigation.vue'
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path:"/KTHeader",
      name:"KTHeader",
      component: KTHeader,
    },
    {
      path:"/KTNavigation",
      name:"KTNavigation",
      component:KTNavigation,
    },




  ],
})

export default router
