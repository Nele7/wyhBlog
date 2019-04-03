import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta: { auth: false }
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/404.vue'),
        meta: { auth: false }
    },
    {
      path: '/',
      name: 'Layout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "layout" */ '../views/Layout/layout.vue'),
      children:[
        {path:'',redirect:'home'},
        {path:'home',name: 'home',component: () => import( '../views/Home.vue'),meta: { auth: false }},
        {path:'tages',name: 'tages',component: () => import( '../views/Tages.vue'),meta: { auth: false }},
        {path:'about',name: 'about',component: () => import( '../views/About.vue'),meta: { auth: false }},
        {path:'article/:id',name:'article',component: () => import( '../views/Article.vue'),meta: { auth: false }}
      ]
    },
    {
      path:'/admin',
      name:'博客管理',
      component:() => import('../views/safeManager/Layout/admin.vue'),
      children:[
        {path:'',redirect:'articleList'},
        {path:'articleList',name: '文章管理',component: () => import( '../views/safeManager/articleList.vue')},
        {path:'classList',name: '分类管理',component: () => import( '../views/safeManager/classList.vue')},
        {path:'articleCreate',name: '发布文章',component: () => import( '../views/safeManager/articleCreate.vue')},
        {path:'articleEdit/:articleId',name: '编辑文章',component: () => import( '../views/safeManager/articleEdit.vue')},
      ]
    }
  ]

