module.exports = {
    /**
     * @param {*} ctx
     *
     * @api {post} /jobs
     * @apiGroup Jobs
     * @apiName CreateJob
     * @apiParam {String} title User must need to provide the job title
     * @apiParam {Number} CompanyId User must need to provide the CompanyId
     * @apiParamExample {String} Request Params:
     * {
     *  "title": "Node.js developer",
     *  "CompanyId": "1"
     * }
     * @apiSuccess {Object} Job A newly created object
     * @apiSuccessExample {json} CreateJob-Success-Response:
     * HTTP/1.1 200Ok
     * {
     *  "id": 1,
     *  "title": "Node.js developer",
     *  "CompanyId": "1",
     *  "updatedAt": "2018-05-20T21:41:30.035Z",
     *  "createdAt": "2018-05-20T21:41:30.035Z"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/jobs
     * @apiDescription LoggedIn user can create new job
     * @apiHeader {String} Authorization JWT Authorization header
     * @apiHeaderExample {json} Request Authorization Header
     * {
     *  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0"
     * }
     */
    async create(ctx) {
        try {
            if(!ctx.request.body.title) {
                ctx.throw(400, 'Please provide the job title');
            }
            if(!ctx.request.body.CompanyId) {
                ctx.throw(400, 'Please provide the CompanyId');
            }

            ctx.body = await ctx.db.Job.create({
                title: ctx.request.body.title,
                CompanyId: ctx.request.body.CompanyId
            });

        } catch (err) {
            ctx.throw(500, err);
        }
    },
    /**
     * @param {*} ctx
     *
     * @api {get} /jobs
     * @apiGroup Jobs
     * @apiName GetJobs
     * @apiSuccess {Object[]} Jobs List of jobs with candidates
     * @apiSuccessExample {json} CreateJob-Success-Response:
     * HTTP/1.1 200Ok
     * [
     *  {
     *   "id": 1,
     *   "name": "Apple",
     *   "city": "California",
     *   "address": "1070 E Arques Ave, Sunnyvale",
     *   "createdAt": "2018-05-20T21:40:32.000Z",
     *   "updatedAt": "2018-05-20T21:40:32.000Z",
     *   "UserId": 1,
     *   "Jobs":
     *   [
     *    {
     *     "id": 1,
     *     "title": "NodeJS developer",
     *     "createdAt": "2018-05-20T21:41:30.000Z",
     *     "updatedAt": "2018-05-20T21:41:30.000Z",
     *     "CompanyId": 1
     *    },
     *    {
     *     "id": 2,
     *     "title": "C# developer",
     *     "createdAt": "2018-05-20T21:50:33.000Z",
     *     "updatedAt": "2018-05-20T21:50:33.000Z",
     *     "CompanyId": 1
     *    }
     *   ]
     *  }
     * ]
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/jobs
     * @apiDescription User can view all the jobs
     * @apiHeader {String} Authorization JWT Authorization header
     * @apiHeaderExample {json} Request Authorization Header
     * {
     *  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0"
     * }
     */
    async find(ctx) {
        try {
            ctx.body = await ctx.db.Job.findAll({
                include: {
                    model: ctx.db.Candidate
                }
            });
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}