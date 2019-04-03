const query = require('../db/');
const {PAGECOUNT} = require('../config/');
module.exports = {
    // 查询所有的文章
    getArticlesList:function(page,pageSize) {
        if(page && pageSize){
            let start = (page-1)*pageSize //从start处开始查询，查询limit条
            return Promise.all([ //都成功但会resolve。一个失败返回reject
                query(`SELECT article_id,article_title,article_brief,create_time,class_type FROM article ORDER BY article_id DESC LIMIT ${start},${pageSize}`),
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
    // 创建一篇文章 管理员
    createArticle:function ({article_title,article_brief,article_content,article_contentToMark,create_time,class_type}) {
        return query(`INSERT INTO article(article_title,article_brief,article_content,article_contentToMark,create_time,class_type) 
                VALUES('${article_title}','${article_brief}','${article_content}','${article_contentToMark}','${create_time}','${class_type}')`)
    },
    // 编辑一篇文章 管理员
    updateArticle:function ({article_id,article_title,article_brief,article_content,article_contentToMark,class_type}){
        // 第一次书写错误，字段名 = 值，值需要加引号
        return query(`UPDATE article SET 
                    article_title='${article_title}',
                    article_brief = '${article_brief}',
                    article_content = '${article_content}',
                    article_contentToMark = '${article_contentToMark}',
                    class_type = '${class_type}'
                    WHERE article_id = ${article_id}`)
    },
    // 根据 文章id 获取一篇其中文章
    getOneArticle(articleId){
        return query(`SELECT article_id,article_title,article_brief,article_content,class_type FROM article WHERE article_id = ${articleId}`)
    }
}