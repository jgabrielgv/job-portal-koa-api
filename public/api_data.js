define({ "api": [
  {
    "type": "post",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "CreateJob",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>User must need to provide the job title</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CompanyId",
            "description": "<p>User must need to provide the CompanyId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"title\": \"Node.js developer\",\n \"CompanyId\": \"1\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Job",
            "description": "<p>A newly created object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CreateJob-Success-Response:",
          "content": "HTTP/1.1 200Ok\n{\n \"id\": 1,\n \"title\": \"Node.js developer\",\n \"CompanyId\": \"1\",\n \"updatedAt\": \"2018-05-20T21:41:30.035Z\",\n \"createdAt\": \"2018-05-20T21:41:30.035Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can create new job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "get",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "GetJobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Jobs",
            "description": "<p>List of jobs with candidates</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CreateJob-Success-Response:",
          "content": "HTTP/1.1 200Ok\n[\n {\n  \"id\": 1,\n  \"name\": \"Apple\",\n  \"city\": \"California\",\n  \"address\": \"1070 E Arques Ave, Sunnyvale\",\n  \"createdAt\": \"2018-05-20T21:40:32.000Z\",\n  \"updatedAt\": \"2018-05-20T21:40:32.000Z\",\n  \"UserId\": 1,\n  \"Jobs\":\n  [\n   {\n    \"id\": 1,\n    \"title\": \"NodeJS developer\",\n    \"createdAt\": \"2018-05-20T21:41:30.000Z\",\n    \"updatedAt\": \"2018-05-20T21:41:30.000Z\",\n    \"CompanyId\": 1\n   },\n   {\n    \"id\": 2,\n    \"title\": \"C# developer\",\n    \"createdAt\": \"2018-05-20T21:50:33.000Z\",\n    \"updatedAt\": \"2018-05-20T21:50:33.000Z\",\n    \"CompanyId\": 1\n   }\n  ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>User can view all the jobs</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "Users",
    "name": "LoginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"email\": \"test@email.com\",\n \"password\": \"password12\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Token",
            "description": "<p>A JSON Web Token to access protected routes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login-Success-Response:",
          "content": "HTTP/1.1 200Ok\n{\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>User can login to the system</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "Users",
    "name": "SignupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"email\": \"test@email.com\",\n \"password\": \"password12\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup succesful!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup-Success-Response:",
          "content": "HTTP/1.1 200Ok\n{\n \"msg\": \"Signup succesful!\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>User can create new account</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
