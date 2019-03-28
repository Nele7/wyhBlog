import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/404.vue')
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
        {path:'home',name: 'home',component: () => import( '../views/Home.vue')},
        {path:'tages',name: 'tages',component: () => import( '../views/Tages.vue')},
        {path:'about',name: 'about',component: () => import( '../views/About.vue')},
        {path:'article/:id',name:'article',component: () => import( '../views/Article.vue')}
      ]
    },
    {
      path:'/admin',
      name:'博客管理',
      component:() => import('../views/safeManager/admin.vue'),
      children:[
        {path:'',redirect:'articleList'},
        {path:'articleList',name: '文章管理',component: () => import( '../views/safeManager/articleList.vue')},
        {path:'classList',name: '分类管理',component: () => import( '../views/safeManager/classList.vue')},
        {path:'articleCreate',name: '发布文章',component: () => import( '../views/safeManager/articleCreate.vue')},
        {path:'articleEdit',name: '编辑文章',component: () => import( '../views/safeManager/articleEdit.vue')},
      ]
    }
  ]
})
