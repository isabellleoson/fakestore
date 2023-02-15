import { createRouter, createWebHashHistory } from 'vue-router'

import Cart from './views/CartView.vue'
import Shop from './views/ShopView.vue'
import LogIn from './views/LogInView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LogIn,
      path: '/:userName?'
    },
    {
      component: Cart,
      path: '/cart/:userName?'
    },
    {
      component: Shop,
      path: '/:shop/:userName?'
    }
  ]
})

export default router
