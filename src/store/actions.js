import Vue from 'vue'
import router from '../router/index';
import api from '../api/'

export default {
    //保存路由跳转header组件中的title
    changeHeadLine:({commit},headline) => commit('HEAD_LINE',headline),
    // 登录
    userLogin:({commit},data) =>{ //data为登录传来的值
        api.localLogin(data).then(({data})=>{ //data为服务端响应的值
            if(data.code === 200){
                Vue.prototype.$notify({
                    title: '成功',
                    message: '登录成功！！！',
                    type: 'success',
                    duration:1000,
                    onClose:function(){
                        commit('USER_SIGNIN',data.message.token)
                        router.replace('/admin')
                    }
                });
            }else{
                // 没找到用户或者密码不对
                Vue.prototype.$notify.error({
                    title: '错误',
                    message: data.message
                });
            }
        })
    },
    // 注销
    userLogout:({commit}) => {
        commit('USER_SIGNOUT')
        router.replace('/login')
    }
}