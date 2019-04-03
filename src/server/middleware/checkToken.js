const jwt = require('jsonwebtoken')
// 该方法接受两个参数，第一个参数为上下文对象，第二个执行下一步操作
module.exports = function (ctx,next) {
    // 判断请求头headers是否授权
    if(ctx.request.headers['authorization']){
        let token = ctx.request.headers['authorization'].split(' ')[1]
        let decoded = jwt.decode(token,process.env.JWT_SECRET)
        // 如果过期了就重新登录
        if(token && decoded.exp <= Date.now()/1000){
            ctx.body = {
                code : 401,
                message: '授权已过期，请重新登录'
            }
            return
        }else{
            next()
        }
    }
}