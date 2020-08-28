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
    path: '/projects',
    name: 'Projekte',
    component: () => import('../views/Project.vue'),
    children: [
      {
        path: '/projects/geometryplus',
        name: 'gemoetryplus',

        component: () => import('../views/projects/Geometryplus.vue')
      },
      {
        path: '/projects/horror',
        name: 'horror',

        component: () => import('../views/projects/Horror.vue')
      },
      {
        path: '/projects/optipessi',
        name: 'optipessi',

        component: () => import('../views/projects/Optipessi.vue')
      },
      {
        path: '/projects/pigsoninstagram',
        name: 'pigsoninstagram',

        component: () => import('../views/projects/Pigsoninstagram.vue')
      },
      {
        path: '/projects/silentsongs',
        name: 'silentsongs',

        component: () => import('../views/projects/Silentsongs.vue')
      },
      {
        path: '/projects/tinkerfestival',
        name: 'tinkerfestival',

        component: () => import('../views/projects/Tinkerfestival.vue')
      },
      {
        path: '/projects/wabi',
        name: 'wabi',

        component: () => import('../views/projects/Wabi.vue')
      },
      {
        path: '/projects/wizard',
        name: 'wizard',

        component: () => import('../views/projects/Wizard.vue')
      },
    ]

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
]

const router = new VueRouter({
  routes
})

export default router
