const Router = require('koa-router');
const router = new Router();
const api = require('../api');


// 获取所有文章列表
router.post('/lists',async(ctx)=>{
    try{
        let name = ctx.request.body.q
        ctx.body = {
            m:name
        }
        // let articleLists = await api.getArticlesList()
        // ctx.body = {
        //     code:200,
        //     message:articleLists
        // }
    }catch(err){
        ctx.body = {
            code:-200,
            message:err.toString()
        }
    }
})
module.exports = router