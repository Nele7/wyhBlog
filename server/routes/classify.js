const Router = require('koa-router')
const router = new Router()
const api = require('../api')
const formatDate = require('../middleware/formatDate')
const checkToken = require('../middleware/checkToken')
// 新建一个分类，需要权限
router
.post('/create',async(ctx,next)=>{
    try{
        let classify = {
            class_type:ctx.request.body.classType,
            create_time:formatDate()
        }
        await checkToken(ctx,next)
        await api.createClass(classify)
        ctx.body = {
            code:200,
            message:'新建成功'
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:'新建失败'
        }
    }
})
// 获取分类列表 需要权限
.post('/list',async(ctx,next)=>{
    try{
        let page = ctx.request.body.page //当前第几页
        let pageSize = ctx.request.body.pageSize //当前页的条数
        await checkToken(ctx,next)
        let result = await api.getClassList(page,pageSize)
        if(result.length === 2){
            let total = result[1][0]['count(class_id)']
            let classList = result[0]
            ctx.body = {
                code:200,
                classList,
                total
            }
        }else{
            ctx.body = {
                code:200,
                classList:result,
            }
        }
    }catch(err){
        ctx.body = {
            code:-200,
            message:err.toString()
        }
    }
})
// 编辑分类 需要权限
.post('/edit',async(ctx,next)=>{
    try{
        await checkToken(ctx,next)
        await api.editClass(ctx.request.body)
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
// 删除分类 需要权限
.post('/delete',async(ctx,next)=>{
    try{
        let classId = ctx.request.body.classId
        console.log(classId)
        await checkToken(ctx,next)
        await api.deleteOneClass(classId)
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
module.exports = router