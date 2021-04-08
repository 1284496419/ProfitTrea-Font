import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import Error from '../views/error.vue'
import Transaction from '../views/transaction.vue'
import Market from '../views/market.vue'
import Admin from '../views/admin.vue'
import Info from '../views/info.vue'
import Data from '../views/data.vue'
import Quotation from '../views/quotationInfo.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    // 属性名: 属性值   之间的空格不要少
    component: Index,
    meta: {
      requireAuth: true
    }
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
    component: Transaction,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/market',
    name: 'market',
    component: Market,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/info',
    name: 'info',
    component: Info,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/data',
    name: 'data',
    component: Data,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/quotation',
    name: 'quotation',
    component: Quotation,
    meta: {
      requireAuth: true
    }
  },
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('Authorization');
  if (to.path == "/login") {
    console.log('登录页')
    if (token === 'null' || token === '') {
      next("/login");
    } else {
      next();
    }
  } else {
    console.log('不是登录页')
    if (token === null || token === '') {
      console.log('登录成功')
      next("/login");
    } else {
      next();
    }
  }
});

export default router
