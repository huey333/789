import { createRouter, createWebHistory } from 'vue-router'
import KTNavigation from '@/views/HelloKitty/KTNavigation.vue'
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
import KTBodyOne from '@/views/HelloKitty/KTBodyOne.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/KTHeader',
      name: 'KTHeader',
      component: KTHeader,
    },
    {
      path: '/KTNavigation',
      name: 'KTNavigation',
      component: KTNavigation,
    },
    {
      path: '/KTBodyOne',
      name: 'KTBodyOne ',
      component:  KTBodyOne,
    },
  ],
})

export default router
