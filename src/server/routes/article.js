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
        
        // await checkToken(ctx,next)
        let articleLists = await api.getArticlesList(page,pageSize)
        console.log(articleLists)

        ctx.body = {
            code:200,
            message:articleLists
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
        console.log(ctx.request.body)

        // await checkToken(ctx,next)
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


module.exports = router