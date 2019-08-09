
const path=require('path');
const koa=require('koa');
const koaRouter=require('koa-router');
const koaViews=require('koa-views');

const app=new koa();
const router=new koaRouter();
const views=path.join(__dirname,'./views');

app.use(koaViews(views,{
    extension:'ejs'
}))

router.get('/api',ctx=>{
    ctx.body=[
        {
            name:'zhangsan',
            age:14
        }
    ]
})

router.get('/home',async ctx=>{
    await ctx.render('home')
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080,()=>{
    console.log("server is running 8080")
})