module.exports = {
    /**
     * @param {*} ctx
     *
     * @api {post} /companies
     * @apiGroup Companies
     * @apiName CreateCompany
     * @apiParam {String} Name Name of the company
     * @apiParam {String} City City of the company
     * @apiParam {String} Address Address of the company
     * @apiParamExample {String} Request Params:
     * {
     *  "name": "Microsoft",
     *  "city": "San José",
     *  "address": "San Jose"
     * }
     * @apiSuccess {Object} Company A newly created company object
     * @apiSuccessExample {json} CreateCompany-Success-Response:
     * HTTP/1.1 200Ok
     * {
     *  "id": 1,
     *  "name": "Microsoft"
     *  "city": "San Jose",
     *  "address": "San Jose",
     *  "updatedAt": "2018-05-20T21:41:30.035Z",
     *  "createdAt": "2018-05-20T21:41:30.035Z"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/companies
     * @apiDescription LoggedIn user can create new company
     * @apiHeader {String} Authorization JWT Authorization header
     * @apiHeaderExample {json} Request Authorization Header
     * {
     *  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0"
     * }
     */
    async create(ctx) {
        try {
            const {
                name,
                city,
                address
            } = ctx.request.body;

            if (!name) {
                ctx.throw(400, 'name is required field');
            }
            if (!city) {
                ctx.throw(400, 'city is required field');
            }
            if (!address) {
                ctx.throw(400, 'address is required field');
            }

            const company = {
                name,
                city,
                address,
                UserId: ctx.state.user
            };

            ctx.body = await ctx.db.Company.create(company);
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    /**
     * @param {*} ctx
     * 
     * @api {get} /companies
     * @apiGroup Companies
     * @apiName FindAllCompanies
     * @apiSuccess {Object[]} Companies List of companies with related jobs
     * @apiSuccessExample {json} GetCompanies-Success-Response:
     * HTTP/1.1 200Ok
     * [
     *  {
     *   "id": 1,
     *   "name": "Microsoft",
     *   "city": "Minnesota",
     *   "address": "Minnesota St 50",
     *   "createdAt": "2018-05-21T20:14:55.000Z",
     *   "updatedAt": "2018-05-21T20:14:55.000Z",
     *   "UserId": 1,
     *   "Jobs": 
     *   [
     *    {
     *     "id": 1,
     *     "title": "Node.js developer",
     *     "createdAt": "2018-05-21T20:17:57.000Z",
     *     "updatedAt": "2018-05-21T20:17:57.000Z",
     *     "CompanyId": 1
     *    }
     *   ]
     *  }
     * ]
     * * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/companies
     * @apiDescription Find all the companies
     * @apiHeader {String} Authorization JWT Authorization header
     * @apiHeaderExample {json} Request Authorization Header
     * {
     *  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0"
     * }
     */
    async find(ctx) {
        try {
            ctx.body = await ctx.db.Company.findAll({
                UserId: ctx.state.user,
                include: {
                    model: ctx.db.Job
                }
            });
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    /**
     * Find company by id
     * @param {*} ctx
     */
    async findOne(ctx) {
        try {
            const company = await ctx.db.Company.findOne({
                where: {
                    id: ctx.params.id
                }
            });
            if (!company) {
                ctx.throw(404, 'Company id is invalid');
            }
            ctx.body = company;
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    /**
     * Destroy a company by id
     * @param {*} ctx 
     */
    async destroy(ctx) {
        try {
            const results = await ctx.db.Company.destroy({
                where: {
                    id: ctx.params.id
                }
            });
            results === 0 ?
                ctx.throw(404, 'Invalid id provided') :
                ctx.body = `Company is deleted with id ${ctx.params.id}`;
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    /**
     * Update company by id
     * @param {*} ctx 
     */
    async update(ctx) {
        try {
            const results = await ctx.db.Company.update({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address,
            }, {
                where: {
                    id: ctx.params.id
                }
            });
            results === 0 ?
                ctx.throw(404, 'Invalid id provided') :
                ctx.body = `Company is updated with id ${ctx.params.id}`;
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}