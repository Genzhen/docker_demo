const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello world'
})

app.listen(3000, () => {
    console.log('server is running at port 3000')
})