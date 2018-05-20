const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const router = require('./routes');
const PORT = process.env.PORT || 4000;

const db = require('./models');
db.sequelize.sync()
    .then(() => console.log('Models synced'))
    .catch(err => console.log(err));

router.get('/', ctx => {
    ctx.body = 'Hello Koa Application';
});

app.context.db = db;
app
.use(bodyParser())
.use(router.routes())
.use(serve(path.join(__dirname, 'public')));

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);