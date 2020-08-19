import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  
    component: () => import('../views/About.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
  
    component: () => import('../views/Kontakt.vue')
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
  
    component: () => import('../views/Datenschutz.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
  
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/wizard',
    name: 'Wizard',
  
    component: () => import('../views/Wizard.vue')
  },
  {
    path: '/pigsoninstagram',
    name: 'Pigsoninstagram',
  
    component: () => import('../views/Pigsoninstagram.vue')
  },

  {
    path: '/silentsongs',
    name: 'Silentsongs',
  
    component: () => import('../views/Silentsongs.vue')
  },

  {
    path: '/horror',
    name: 'Horror',
  
    component: () => import('../views/Horror.vue')
  },

  {
    path: '/optipessi',
    name: 'Optipessi',
  
    component: () => import('../views/Optipessi.vue')
  },

  {
    path: '/wabi',
    name: 'Wabi',
  
    component: () => import('../views/Wabi.vue')
  },
  {
    path: '/tinkerfestival',
    name: 'Tinkerfestival',
  
    component: () => import('../views/Tinkerfestival.vue')
  },
  {
    path: '/geometryplus',
    name: 'Geometryplus',
  
    component: () => import('../views/Geometryplus.vue')
  },
  

 

 
 
]

const router = new VueRouter({
  routes
})

export default router
