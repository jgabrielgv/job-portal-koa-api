const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);