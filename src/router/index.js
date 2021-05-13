import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Portfolio',
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Über mich',
    },
    component: () => import('../views/About.vue')
  },
  {           // note: this route needs to be the 3 position in the routes array, otherwise the navigation doesn't work
    path: '/projects',
    name: 'Projekte',
    component: () => import('../views/Project.vue'),
    children: [
      {
        path: '/projects/darkpatterns',
        name: 'darkpatterns',

        meta: {
          title: 'Dark Patterns',
          base_color: "#FFFFFF",
          teaser: 'Dark Patterns',
          prominent: true,
        },
        component: () => import('../views/projects/darkpatterns/index.vue')
      },
      {
        path: '/projects/wizard',
        name: 'wizard',

        meta: {
          title: 'Clod, the weather wizard',
          base_color: "#135F84",
          teaser: 'Clod, the weather wizard',
        },
        component: () => import('../views/projects/wizard/index.vue')
      },
      {
        path: '/projects/silentsongs',
        name: 'silentsongs',

        meta: {
          title: 'Silent Songs',
          base_color: "#000000",
          teaser: 'Silent Songs',
        },
        component: () => import('../views/projects/silentsongs/index.vue')
      },
      {
        path: '/projects/geometryplus',
        name: 'geometryplus',
        meta: {
          title: 'Geometry+',
          base_color: "#ffffff",
          teaser: 'Geometry+'
        },
        component: () => import('../views/projects/geometryplus/index.vue')
      },
      {
        path: '/projects/horror',
        name: 'horror',
        meta: {
          title: 'Geschichte des Horrors',
          base_color: "#CE2E37",
          teaser: 'Geschichte des Horrors'
        },
        component: () => import('../views/projects/horror/index.vue')
      },
      {
        path: '/projects/pigsoninstagram',
        name: 'pigsoninstagram',

        meta: {
          title: 'Why are there so many pigs on instagram?',
          base_color: "#FFC9E0",
          teaser: 'Why are there so many pigs on instagram?'
        },
        component: () => import('../views/projects/pigsoninstagram/index.vue')
      },
      {
        path: '/projects/optipessi',
        name: 'optipessi',

        meta: {
          title: 'Optimist:Pessimist',
          base_color: "#27272C",
          teaser: 'Optimist:Pessismist'
        },
        component: () => import('../views/projects/optipessi/index.vue')
      },
      {
        path: '/projects/wabi',
        name: 'wabi',

        meta: {
          title: 'Wabi Phone',
          base_color: "#F7BC15",
          teaser: 'Wabi Phone'
        },
        component: () => import('../views/projects/wabi/index.vue')
      },
      
      {
        path: '/projects/tinkerfestival',
        name: 'tinkerfestival',

        meta: {
          title: 'Tinkerfestival',
          base_color: "#2AE1FF",
          teaser: 'Tinkerfestival Würzburg'
        },
        component: () => import('../views/projects/tinkerfestival/index.vue')
      },
    
      
      {
        path: '/projects/pretzelprinter',
        name: 'pretzelprinter',

        meta: {
          title: 'Pretzelprinter',
          base_color: "#000",
          teaser: 'pretzelprinter Logo'
        },
        component: () => import('../views/projects/pretzelprinter/index.vue')
      },
    ]

  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    meta: {
      title: "Kontakt",
    },
    component: () => import('../views/Kontakt.vue')
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    meta: {
      title: "Datenschutz",
    },
    component: () => import('../views/Datenschutz.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    meta: {
      title: "Impressum",
    },
    component: () => import('../views/Impressum.vue')
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
