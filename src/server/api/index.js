const query = require('../db/');
const {PAGECOUNT} = require('../config/');
module.exports = {
    // 查询所有的文章
    getArticlesList:function(page,pageSize) {
        if(page && pageSize){
            let start = (page-1)*pageSize //从start处开始查询，查询limit条
            return Promise.all([ //都成功但会resolve。一个失败返回reject
                query(`SELECT article_id,article_title,article_brief,create_time FROM article ORDER BY article_id DESC LIMIT ${start},${pageSize}`),
                query(`SELECT count(article_id) FROM article`)
            ])
        }else{
            // 如果没有传值，默认为降序
            return query(`SELECT * FROM article ORDER BY article_id DESC`)
        }
    },
    // 后台管理登录
    getUserByName:function (name,pwd) { 
        return query(`SELECT * FROM user WHERE user_name = '${name}' && user_pwd = '${pwd}'`)
    },
    // 创建一篇文章
    createArticle:function ({article_title,article_brief,article_content,article_contentToMark,create_time,class_type}) {
        console.log(article_title,article_brief,article_content,article_contentToMark,create_time,class_type)
        return query(`INSERT INTO article(article_title,article_brief,article_content,article_contentToMark,create_time,class_type) 
                VALUES('${article_title}','${article_brief}','${article_content}','${article_contentToMark}','${create_time}','${class_type}')`)
    }
}