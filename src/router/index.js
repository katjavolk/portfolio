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
        meta: {
          base_color: "#ffffff",
        },
        component: () => import('../views/projects/geometryplus/index.vue')
      },
      {
        path: '/projects/horror',
        name: 'horror',
        title: 'Geschichte des Horrors',
        meta: {
          base_color: "#CE2E37",
        },
        component: () => import('../views/projects/horror/index.vue')
      },
      {
        path: '/projects/optipessi',
        name: 'optipessi',
        title: 'Optimist:Pessimist',
        meta: {
          base_color: "#27272C",
        },
        component: () => import('../views/projects/optipessi/index.vue')
      },
      {
        path: '/projects/pigsoninstagram',
        name: 'pigsoninstagram',
        title: 'Pigs on Instagram',
        meta: {
          base_color: "#FFC9E0",
        },
        component: () => import('../views/projects/pigsoninstagram/index.vue')
      },
      {
        path: '/projects/silentsongs',
        name: 'silentsongs',
        title: 'Silent Songs',
        meta: {
          base_color: "#000000",
        },
        component: () => import('../views/projects/silentsongs/index.vue')
      },
      {
        path: '/projects/tinkerfestival',
        name: 'tinkerfestival',
        title: 'Tinkerfestival',
        meta: {
          base_color: "#2AE1FF",
        },
        component: () => import('../views/projects/tinkerfestival/index.vue')
      },
      {
        path: '/projects/wabi',
        name: 'wabi',
        title: 'Wabi Phone',
        meta: {
          base_color: "#F7BC15",
        },
        component: () => import('../views/projects/wabi/index.vue')
      },
      {
        path: '/projects/wizard',
        name: 'wizard',
        title: 'Clod, the weather wizard',
        meta: {
          base_color: "#135F84",
        },
        component: () => import('../views/projects/wizard/index.vue')
      },
      {
        path: '/projects/pretzelprinter',
        name: 'pretzelprinter',
        title: 'Pretzelprinter',
        meta: {
          base_color: "#000",
        },
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
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
