import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component:()=>import ('../views/goods/goods.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component:()=>import('../views/seller/seller.vue')
  }, {
    path: '/ratings',
    name: 'ratings',
    component:()=>import('../views/ratings/ratings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

export default router
