// import {HEAD_LINE} from './mutation_types'
import * as types from './mutation_types'
export default {
    // 路由跳转时的title
    [types.HEAD_LINE](state,headline){
        state.headline = headline
    },
    [types.USER_SIGNIN](state,token){
        state.token = token
        localStorage.setItem('jwt',token)

        // try{ //在Safari匿名模式下会报错
        // }catch(e){}
    }
}