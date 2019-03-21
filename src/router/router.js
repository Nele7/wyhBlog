import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Layout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "layout" */ '../views/Layout/layout.vue'),
      children:[
        {path:'home',name: 'home',component: () => import( '../views/Home.vue')},
        {path:'tages',name: 'tages',component: () => import( '../views/Tages.vue')},
        {path:'about',name: 'about',component: () => import( '../views/About.vue')},
      ]
    }
  ]
})
