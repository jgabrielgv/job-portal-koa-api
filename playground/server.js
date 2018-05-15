const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const _ = require('lodash');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 4000;

app.use(bodyParser());

let posts = require('../fixtures/posts');

// main entry
router.get('/', (ctx, next) => {
  ctx.body = 'Welcome to koa Application';
});

// GET all posts
router.get('/posts', (ctx, next) => {
  ctx.body = posts;
});

// GET posts by id
router.get('/posts/:id', ctx => {
  const post = posts.find(e => e.id === ctx.params.id);
  ctx.body = post;
});

// POST posts
router.post('/posts', ctx => {
  const {
    id,
    name,
    content
  } = ctx.request.body;

  if (!id) {
    ctx.throw(400, 'id is required field');
  }
  if (!name) {
    ctx.throw(400, 'name is required field');
  }
  if (!content) {
    ctx.throw(400, 'content is required field');
  }

  posts.push({
    id,
    name,
    content
  });
  ctx.body = posts;
});

// DELETE /posts:/id
router.delete('/posts/:id', ctx => {
  ctx.body = _.remove(posts, p => p.id === ctx.params.id);
});

// PUT /posts/:id
router.put('/posts/:id', ctx => {
  const { id, name, content } = ctx.request.body;
  const reqBody = ctx.request.body;
  const index = posts.findIndex(post => post.id === ctx.params.id);
  if(index >= 0) {
    if('id' in reqBody || id) {
      posts[index].id = id;
    }
    if('name' in reqBody || name) {
      posts[index].name = name;
    }
    if('content' in reqBody || content) {
      posts[index].content = content;
    }
  }
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