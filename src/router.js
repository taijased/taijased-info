import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Portfolio = () => import('./views/Portfolio.vue')
const About = () => import('./views/about/About.vue')
const Index = () => import('./views/Index.vue')
const Stack = () => import('./views/Stack.vue')
const ProjectContent = () => import('./components/content/ProjectContent.vue')
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
          component: Portfolio,
          children: [
            {
              path: '',
              name: 'portfoliocontent',
              component: ProjectContent
            }
          ]
        },
        {
          path: '/',
          name: 'about',
          component: About
        },
        {
          path: '/stack',
          name: 'stack',
          component: Stack
        }
      ]
    },
  ]
})
