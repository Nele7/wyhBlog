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
        {path:'',redirect:'home'},
        {path:'home',name: 'home',component: () => import( '../views/Home.vue')},
        {path:'tages',name: 'tages',component: () => import( '../views/Tages.vue')},
        {path:'about',name: 'about',component: () => import( '../views/About.vue')},
        {path:'article/:id',name:'article',component: () => import( '../views/Article.vue')}
      ]
    },
    {
      path:'/admin',
      name:'admin',
      component:() => import('../views/safeManager/admin.vue'),
      children:[
        {path:'',redirect:'articleList'},
        {path:'articleList',name: 'articleList',component: () => import( '../views/safeManager/articleList.vue')},
        {path:'classList',name: 'classList',component: () => import( '../views/safeManager/classList.vue')},
      ]
    }
  ]
})
