define({ "api": [
  {
    "type": "post",
    "url": "/applications",
    "title": "",
    "group": "Applications",
    "name": "CreateApplication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Application",
            "description": "<p>A newly created application object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CreateApplication-Success-Response:",
          "content": "HTTP/1.1 200Ok\n{\n \"status_id\": 1,\n \"CandidateId\": 1\n \"JobId\": \"1\",\n \"updatedAt\": \"2018-05-20T21:41:30.035Z\",\n \"createdAt\": \"2018-05-20T21:41:30.035Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/applications",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can apply for the Job</p>",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>First name of the applicant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>Last name of the applicant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the applicant</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "JobId",
            "description": "<p>Job ID to apply</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/application.controller.js",
    "groupTitle": "Applications"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "",
    "group": "Companies",
    "name": "CreateCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>City of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"name\": \"Microsoft\",\n \"city\": \"San José\",\n \"address\": \"San Jose\"\n}",
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
            "field": "Company",
            "description": "<p>A newly created company object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CreateCompany-Success-Response:",
          "content": "HTTP/1.1 200Ok\n{\n \"id\": 1,\n \"name\": \"Microsoft\"\n \"city\": \"San Jose\",\n \"address\": \"San Jose\",\n \"updatedAt\": \"2018-05-20T21:41:30.035Z\",\n \"createdAt\": \"2018-05-20T21:41:30.035Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can create new company</p>",
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
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "",
    "group": "Companies",
    "name": "FindAllCompanies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Companies",
            "description": "<p>List of companies with related jobs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetCompanies-Success-Response:",
          "content": "HTTP/1.1 200Ok\n[\n {\n  \"id\": 1,\n  \"name\": \"Microsoft\",\n  \"city\": \"Minnesota\",\n  \"address\": \"Minnesota St 50\",\n  \"createdAt\": \"2018-05-21T20:14:55.000Z\",\n  \"updatedAt\": \"2018-05-21T20:14:55.000Z\",\n  \"UserId\": 1,\n  \"Jobs\": \n  [\n   {\n    \"id\": 1,\n    \"title\": \"Node.js developer\",\n    \"createdAt\": \"2018-05-21T20:17:57.000Z\",\n    \"updatedAt\": \"2018-05-21T20:17:57.000Z\",\n    \"CompanyId\": 1\n   }\n  ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>Find all the companies</p>",
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
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
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
          "title": "GetJobs-Success-Response:",
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
