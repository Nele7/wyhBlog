const Router = require('koa-router');
const router = new Router();
const api = require('../api');


// 获取所有文章列表
router.get('/lists',async(ctx)=>{
    try{
        let articleLists = await api.getArticlesList()
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
module.exports = router