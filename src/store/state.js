import router from '../router/index'
import Vue from 'vue'
console.log(Vue.prototype.$store)
const state = {
    headline: '',
    token:isLoggedIn()|| ''
}
// 判断token的有效期
function isLoggedIn (){
    let token = localStorage.getItem('jwt')
    if(token){
        // 解码，将bese-64转化成JS对象
        const payload = JSON.parse(window.atob(token.split('.')[1]))
        // 当前的时间小于token过期时间
        if(payload.exp>Date.now()/1000){
            return token
        }
        return true
    }else{
        return false
    }
}
export default state