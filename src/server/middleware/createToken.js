const jwt = require('jsonwebtoken') // 引入jsonwebtoken
module.exports = function (name){
    let expiry = new Date()         
    expiry.setDate(expiry.getDate()+7)// 有效期设置为7天
    const token = jwt.sign({
        name:name,
        exp:parseInt(expiry.getTime()/1000) //除以1000表示到期时间的毫秒数
    },process.env.JWT_SECRET)
    return token
}