import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Portfolio = () => import('./views/Portfolio.vue')
const Index = () => import('./views/Index.vue')
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/Portfolio',
          name: 'portfolio',
          component: Portfolio
        }
      ]
    },
  ]
})
