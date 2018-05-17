# koa-sample-api
Koa sample API

Additional steps:
Install sequelize-cli globally: npm install -g sequelize-cli

Creating models:

Creating Company model:
sequelize model:generate --name Company --attributes name:string,city:string,address:string

Creating Job model:
sequelize model:generate --name Job --attributes title:string

Creating the Candidate model:
sequelize model:generate --name Candidate --attributes firstName:string,lastName:string,email:string

Creating the Application model:
sequelize model:generate --name Application --attributes status_id:integer

Creating the User model:
sequelize model:generate --name User --attributes email:string,password:string