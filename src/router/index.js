import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
import routes from './routes'
const router =  new VueRouter({
    // mode:'history',
    // scrollBehavior,
    routes
})
// 路由钩子
router.beforeEach(({meta,path},from,next)=>{
    console.log(meta)
    let {auth=true}=meta  //meta为false则auth为false；否则auth为true
    let isLogin = Boolean(store.state.token) //转换为true or false
    /*
      访问不需要权限的设置meta:false
      注册也要设置成meta:false
    */
    //访问的是需要权限的页面且没有登录
    if(auth&&!isLogin){
        return next({path:'/login'});
    }
    // 如果登录了在访问login则路由到admin
    if(isLogin&&(path=='/login')){
        return next({path:'/admin'});
    }
    next()
})
export default router