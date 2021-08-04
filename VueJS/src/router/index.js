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
    path: '/star-ratings',
    name: 'AwesomeStarRating',
    component: () => import('../views/AwesomeStarRating.vue')
  },
  {
    path: '/circular-menu',
    name: 'CircularMenu',
    component: () => import('../views/CircularMenu.vue')
  },
  {
    path: '/video-player',
    name: 'VideoPlayer',
    component: () => import('../views/VideoPlayer.vue')
  },
  {
    path: '/image-converter',
    name: 'StorImageConvertere',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ImageConverter.vue')
  },
  {
    path: '/date-picker',
    name: 'DatePicker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DatePicker.vue')
  },
  {
    path: '/vue-scroll-to',
    name: 'VueScrollTo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VueScrollTo.vue')
  },
  {
    path: '/collection-validation',
    name: 'CollectionValidation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CollectionValidation.vue')
  },
  {
    path: '/vuelidate',
    name: 'Vuelidate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormValidation.vue')
  },
  {
    path: '/v-models',
    name: 'V-Models',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/V-Models.vue')
  },
  {
    path: '/transitions',
    name: 'Transitions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Transitions.vue')
  },
  {
    path: '/drragable-div',
    name: 'DraggableDiv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DragAndDrop.vue')
  },
  {
    path: '/watch-vs-computed',
    name: 'Watch-Vs-Computed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchVsComputed.vue')
  },
  {
    path: '/testing',
    name: 'Tests',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tests.vue')
  },
  {
    path: '/grid-view',
    name: 'GridView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GridView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/edit',
    name: 'EditProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditProfile.vue')
  },
  {
    path: '/dynamicComp',
    name: 'DCExample',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DynamicComponentExample.vue')
  },
  {
    path: '/nestedroutes',
    name: 'NestedRoutes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NestedRouting.vue'),
    children: [
      {
        path: 'profile',
        name: 'NestedRouteProfile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
      },
      {
        path: 'edit',
        name: 'NestedRouteEditProfile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/EditProfile.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
