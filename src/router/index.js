import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    // 属性名: 属性值   之间的空格不要少
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
