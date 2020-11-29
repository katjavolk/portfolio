import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

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
        name: 'geometryplus',
        title: 'Geometry+',
        component: () => import('../views/projects/geometryplus/index.vue')
      },
      {
        path: '/projects/horror',
        name: 'horror',
        title: 'Geschichte des Horrors',
        component: () => import('../views/projects/horror/index.vue')
      },
      {
        path: '/projects/optipessi',
        name: 'optipessi',
        title: 'Optimist:Pessimist',
        component: () => import('../views/projects/optipessi/index.vue')
      },
      {
        path: '/projects/pigsoninstagram',
        name: 'pigsoninstagram',
        title: 'Pigs on Instagram',
        component: () => import('../views/projects/pigsoninstagram/index.vue')
      },
      {
        path: '/projects/silentsongs',
        name: 'silentsongs',
        title: 'Silent Songs',
        component: () => import('../views/projects/silentsongs/index.vue')
      },
      {
        path: '/projects/tinkerfestival',
        name: 'tinkerfestival',
        title: 'Tinkerfestival',
        component: () => import('../views/projects/tinkerfestival/index.vue')
      },
      {
        path: '/projects/wabi',
        name: 'wabi',
        title: 'Wabi Phone',
        component: () => import('../views/projects/wabi/index.vue')
      },
      {
        path: '/projects/wizard',
        name: 'wizard',
        title: 'Clod, the weather wizard',
        component: () => import('../views/projects/wizard/index.vue')
      },
      {
        path: '/projects/pretzelprinter',
        name: 'pretzelprinter',
        title: 'Pretzelprinter',
        component: () => import('../views/projects/pretzelprinter/index.vue')
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
