import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/defaulters',
    name: 'defaulters',
    component: () => import(/* webpackChunkName: "about" */ '../views/DefaultersView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blogView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/indexView.vue')
  },
  {
    path: '/admin/blog',
    name: 'admin/blog',
    component: () => import('../views/admin/blogAdmin.vue')
  },
  {
    path: '/admin/party',
    name: 'admin/party',
    component: () => import('../views/admin/partyAdmin.vue')
  },
  {
    path: '/admin/defaulters',
    name: 'admin/defaulters',
    component: () => import('../views/admin/defaultersAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
