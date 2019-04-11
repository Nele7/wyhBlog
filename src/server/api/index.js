const query = require('../db/');
const {PAGECOUNT} = require('../config/');
module.exports = {
    // 查询所有的文章 管理员
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
    // 根据文章id 获取一篇其中文章 管理员
    getOneArticle(articleId){
        return query(`SELECT article_id,article_title,article_brief,article_content,class_type FROM article WHERE article_id = ${articleId}`)
    },
    // 删除一篇文章 管理员
    deleteOneArticle(articleId){
        return query(`DELETE FROM article WHERE article_id = '${articleId}'`)
    },
    // 获取分类列表 管理员
    getClassList(page,pageSize){
        if(page && pageSize){
            let start = (page-1)*pageSize
            return Promise.all([
                query(`SELECT class_id,create_time,class_type FROM classify ORDER BY class_id DESC LIMIT ${start},${pageSize}`),
                query(`SELECT count(class_id) FROM classify`)
            ])
        }else{
            return query(`SELECT * FROM classify ORDER BY class_id DESC`)
        }
    },
    // 新建分类 管理员
    createClass({class_type,create_time}){
        return query(`INSERT INTO classify(class_type,create_time) VALUES('${class_type}','${create_time}')`)
    },
    // 编辑分类 管理员
    editClass({class_type,class_id}){
        return query(`UPDATE classify SET class_type = '${class_type}' WHERE class_id = ${class_id}`)
    },
    // 删除一条分类
    deleteOneClass(class_id){
        return query(`DELETE FROM classify WHERE class_id = ${class_id}`)
    },
    // 根据分类获取文章列表
    getArticlesByClassify(classType){
        return query(`SELECT article_id,article_title,article_brief,create_time,class_type FROM article WHERE class_type = '${classType}' ORDER BY article_id DESC`)
    },
    // 查看一篇文章详情
    getOneArticleDetail(articleId){
        return query(`SELECT * FROM article WHERE article_id = ${articleId}`)
    }
}