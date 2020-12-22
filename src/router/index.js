import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import Error from '../views/error.vue'
import Transaction from '../views/transaction.vue'
import Market from '../views/market.vue'
import Admin from '../views/admin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    // 属性名: 属性值   之间的空格不要少
    component: Index,
    chiledren: [
      {
        path: '/',
        name: 'login',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction
  },
  {
    path: '/market',
    name: 'market',
    component: Market
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = new VueRouter({
  routes
})

export default router
