import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '../layout/default'
import LoginLayout from '../layout/login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginLayout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
