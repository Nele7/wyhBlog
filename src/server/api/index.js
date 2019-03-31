const query = require('../db/');
const {PAGECOUNT} = require('../config/');
module.exports = {
    // 查询所有的文章
    getArticlesList:function() {
        return query(`SELECT * FROM article`)
    },
    // 后台管理登录
    getUserByName:function (name,pwd) { 
        return query(`SELECT * FROM user WHERE user_name = '${name}' && user_pwd = '${pwd}'`)
    }
}