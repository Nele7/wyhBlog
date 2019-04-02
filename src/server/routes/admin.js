// dotenv,可以将这个密钥设置成环境变量。在根目录下创建一个.env文件并设置密码
require('dotenv').load();
require('dotenv').config();
// 引入依赖
const Router = require('koa-router')
const router = new Router()
const sha1 = require('sha1') // 用于sha1密码加密

// 引入文件
const api = require('../api')
const createToken = require('../middleware/createToken')

/**
 * 登录操作，判断用户名和密码是否正确
 * @param string account 用户名
 * @param string checkPass 密码
 * @return token 若用户名和密码输入正确，返回token；否则，返回错误
 */

router
.post('/login',async(ctx) => {
    try{
        let name = ctx.request.body.account
        let pwd = ctx.request.body.checkPass
        // let name = ctx.request.query.name
        let result = await api.getUserByName(name,pwd)
        if(result.length !== 0){
            ctx.body = {
                code:200,
                message:{token:createToken(name)}
            }
        }else{
            ctx.body = {
                code: -200,
                message:'登录失败,请检查'
            }
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:'数据库错误'
        }
    }
    
})

module.exports = router