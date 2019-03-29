const Router = require('koa-router');
const router = new Router();

// const admin = require('./admin');
// const classify = require('./classify');
const article = require('./article');

module.exports = function (app){
  	//路由表
	app.use(router.routes()).use(router.allowedMethods());

	// router.use('/api/admin',admin.routes(),admin.allowedMethods());
	// router.use('/api/classify',classify.routes(),classify.allowedMethods());
	router.use('/api/article',article.routes(),article.allowedMethods());
}
