import axios from 'axios'
// 创建axios实例
// const self = axios.create({ //后台管理
//     baseURL:'http://localhost:3009/api'
// })
const back = axios.create({ //后台管理
    baseURL:'http://localhost:3009/api'
})
// 设置post的请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求超时时间
axios.defaults.timeout = 10000;
if(localStorage.getItem('jwt')){
    /*
        localStorage.getItem('jwt')是带有引号的字符串
        Bearer token 通过Authorization头部字段发送到服务端便于验证的格式：Bearer XXXXXXX (注意Bearer后面的空格)
    */
    back.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('jwt').replace(/(^\")|(\"$)/g, '')
}
// 请求拦截器
axios.interceptors.request.use = back.interceptors.request.use
// 设置请求拦截器
// back.interceptors.request.use(config=>{
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    
//     let jwt = localStorage.getItem('jwt')
//     jwt && (back.defaults.headers.common['Authorization'] = "Bearer "+jwt.replace(/(^\")|(\"$)/g, ''))
//     return config
// },err=>{
//     return Promise.reject(err)
// })
// //设置响应拦截器
// back.interceptors.response.use(response=>{
//     if(response.status === 200){
//         return Promise.resolve(response.data)
//     }else{
//         return Promise.reject(response)
//     }
// })
// export function localLogin(data){
//     return back.post('/admin/login', data)
// }
export default {
    // 登录
    localLogin(data){
        return back.post('/admin/login', data)
    },
    // admin 发布文章
    createArticle(data){
        return back.post('/article/create',data)
    },
    // admin 获取文章列表
    lists(data){
        return back.post('/article/lists',data)
    },
    // 根据文章id，获取一篇文章
    getOneArticle(data){
        return back.post('/article/onePage',data)
    },
    // 文章编辑
    editArticle(data){
        return back.post('/article/update',data)
    },
    // 删除一篇文章
    deleteOneArticle(data){
        return back.post('/article/delete',data)
    },

    // 获取分类列表
    classList(data){
        return back.post('/classify/list',data)
    },
    // 新建分类
    createClass(data){
        return back.post('/classify/create',data)
    },
    // 编辑分类
    editClass(data){
        return back.post('/classify/edit',data)
    },
    // 删除分类
    deleteClass(data){
        return back.post('/classify/delete',data)
    }
    
    
}
