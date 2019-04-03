const Router = require('koa-router');
const router = new Router();
const api = require('../api');
const formatDate = require('../middleware/formatDate')
const checkToken = require('../middleware/checkToken')
// 获取所有文章列表(带分router页获取,需要验证权限) checkToken,
router
.post('/lists',async(ctx,next)=>{
    try{
        let page = ctx.request.body.page //当前第几页
        let pageSize = ctx.request.body.pageSize //当前页的条数
        
        await checkToken(ctx,next)
        let result = await api.getArticlesList(page,pageSize)
        if(result.length === 2){
            let total = result[1][0]['count(article_id)']
            let articleLists = result[0]
            ctx.body = {
                code:200,
                articleLists,
                total
            }
        }else{
            ctx.body = {
            code:200,
            articleLists:result,
            }
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:err.toString()
        }
    }
})

//创建一篇文章，需要权限
.post('/create',async(ctx,next) => {
    try{
        let article = ctx.request.body
        article.create_time = formatDate()
        await checkToken(ctx,next)
        await api.createArticle(article)
        ctx.body = {
            code:200,
            message:'发布成功'
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:'发布失败'
        }
    }
})
// 编辑一篇文章，需要权限
.post('/update',async(ctx,next)=>{
    try{
        let update = ctx.request.body
        await checkToken(ctx,next)
        await api.updateArticle(update)
        ctx.body = {
            code:200,
            message:'编辑成功'
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:'编辑失败'
        }
    }
})
// 根据文章id，获取一篇文章,需要权限
.post('/onePage',async(ctx,next)=>{
    try{
        let articleId = ctx.request.body.articleId
        await checkToken(ctx,next)
        let oneArticle = await api.getOneArticle(articleId)
        ctx.body = {
            code:200,
            oneArticle:oneArticle[0]
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:err.toString()
        }
    }
})
module.exports = router