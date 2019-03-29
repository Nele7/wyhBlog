const query = require('../db/');
const {PAGECOUNT} = require('../config/');
module.exports = {
    // 查询所有的文章
    getArticlesList:function(){return  query(`SELECT * FROM article`)}
}