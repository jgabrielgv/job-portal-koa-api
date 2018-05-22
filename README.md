# Job Portal API

This is a simple Koa API based on the tutorial [Node.Js: Learning Koa.Js By Building REST APIs](https://www.udemy.com/learning-koajs-by-building-rest-apis/).
The API interfaces with the [sequelize](http://docs.sequelizejs.com/) ORM and it has been documented using [apidoc](http://apidocjs.com/).

## Steps to run the application:
1. Clone or download the source code
```
$ git clone git@github.com:jgabrielgv/koa-sample-api.git
```
2. Place the terminal under the downloaded folder
3. Install the dependencies
```
$ npm install
```
4. Run the testing command
```
$ npm run dev
```
5. Testing a request (in the [/public/index.html](https://github.com/jgabrielgv/job-portal-koa-api/blob/master/public/index.html) you will find the neccesary documentation to execute the following requests:
5.1 Sign up
5.2 Sign in
5.3 Create a new company
5.4 Retrieve all the companies

## Working with the sequelize-cli
To be able to use the sequelize command line interface, you need to install it globally:
```
$ npm install -g sequelize-cli
```

## Creating the models
You will find below the used commands to create the 5 models (under [models](https://github.com/jgabrielgv/job-portal-koa-api/tree/master/models) folder).

### Creating the Company model:
```
$ sequelize model:generate --name Company --attributes name:string,city:string,address:string
```
### Creating the Job model:
```
$ sequelize model:generate --name Job --attributes title:string
```
### Creating the Candidate model:
```
$ sequelize model:generate --name Candidate --attributes firstName:string,lastName:string,email:string
```
### Creating the Application model:
```
$ sequelize model:generate --name Application --attributes status_id:integer
```
### Creating the User model:
```
$ sequelize model:generate --name User --attributes email:string,password:string
```
## Sequelize migrations
The sequelize migration is a great tool to keep changes to the database. It allows to upgrade (up function) or downgrade the structure of the database (down function).
You will find below a couple of samples of how alter a database structure using sequelize.
### Creating the migration database
First make sure to delete the existing records in the database by adding the force option
```
db.sequelize.sync({ force: true })
```
### Migration command
When you run the migration command it will create a new table called  SequelizeMeta, under the database that you defined.
```
$ sequelize db:migrate
```
### Adding a new property to Users table
First, you need to add a new migration
```
$ sequelize migration:generate --name address
```
Either adds the address column to the User table (up method) or removes it (down method)
```
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Users', 'address', {
        type: Sequelize.STRING
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.RemoveColumn('Users', 'address');
  }
};
```
### Applying change to add the address column to existing User table
```
$ sequelize db:migrate
```
### Adding the city column to Users table
1. Adding the new migration file
```
$ sequelize migration:generate --name city
```
2. Adding the migration changes
```
up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'city', {
      type: Sequelize.STRING
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.RemoveColumn('Users', 'city');
  }
```
### Undoing migration changes
```
$ sequelize db:migrate:undo
```
## Apidoc
To be able to work with apidoc and run the configured commands under packages.json, it is recommended to install it globally:
```
npm i -g apidoc
```

# License
  MIT