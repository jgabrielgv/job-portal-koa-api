const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const PORT = 4000;

// main entry

router.get('/', (ctx, next) => {
  ctx.body = 'Welcome to koa Application';
});

// posts

const posts = [
  {
    "id": '1',
    "name": "Nodejs Developer",
    "content": "test"
  },
  {
    "id": '2',
    "name": "C# Developer",
    "content": "test"
  },
  {
    "id": '3',
    "name": "Java Developer",
    "content": "test"
  },
];

router.get('/posts', (ctx, next) =>{
  ctx.body = posts;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(async (ctx, next) => {
//   console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
//   await next();
// });

// app.use(async (ctx, next) => {
//   console.log(`2nd middleware`);
//   return await next();
// });

// app.use(async ctx => {
//   ctx.body = 'Hello world!';
// });

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);