import { createRouter, createWebHistory } from 'vue-router'
import Login2 from '@/views/LoginView/Login2.vue'
import Cart from '@/views/ShopView/Cart.vue'
import WishList2 from '@/views/ShopView/WishList2.vue'
import Header from '@/views/ShopView/Header.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',                 // 根路径
      redirect: '/Login2'        // 重定向到 /Login2
    },
    {
      path: '/Login2',
      name: 'Login2',
      component: Login2,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/WishList2',
      name: 'WishList2',
      component: WishList2,
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header,
    },

  ],
})

export default router
