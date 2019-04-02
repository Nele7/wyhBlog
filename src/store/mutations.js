// import {HEAD_LINE} from './mutation_types'
import * as types from './mutation_types'
export default {
    // 路由跳转时的title
    [types.HEAD_LINE](state,headline){
        state.headline = headline
    },
    // 登录
    [types.USER_SIGNIN](state,token){
        try{ //在Safari匿名模式下会报错
            state.token = token
            localStorage.setItem('jwt',token)
        }catch(e){}
    },
    // 注销
    [types.USER_SIGNOUT](state){
        try{ //在Safari匿名模式下会报错
            state.token = ''
            localStorage.removeItem('jwt')
        }catch(e){}
    }
}