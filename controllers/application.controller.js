module.exports = {
    /**
     * @param {*} ctx
     *
     * @api {post} /applications
     * @apiGroup Applications
     * @apiName CreateApplication
     * @apiSuccess {Object} Application A newly created application object
     * * @apiSuccessExample {json} CreateApplication-Success-Response:
     * HTTP/1.1 200Ok
     * {
     *  "status_id": 1,
     *  "CandidateId": 1
     *  "JobId": "1",
     *  "updatedAt": "2018-05-20T21:41:30.035Z",
     *  "createdAt": "2018-05-20T21:41:30.035Z"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/applications
     * @apiDescription LoggedIn user can apply for the Job
     * @apiHeader {String} Authorization JWT Authorization header
     * @apiHeaderExample {json} Request Authorization Header
     * {
     *  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0"
     * }
     * @apiParam {String} [firstName] First name of the applicant
     * @apiParam {String} [lastName] Last name of the applicant
     * @apiParam {String} [email] Email of the applicant
     * @apiParam {Number} JobId Job ID to apply
     */
    async create(ctx) {
        try {

            if(!ctx.request.body.jobId) {
                ctx.throw(400, 'JobId is required');
            }

            // enhancement: validate if job id exists in the database

            const candidate = await ctx.db.Candidate.create({
                firstName: ctx.request.body.firstName,
                lastName: ctx.request.body.lastName,
                email: ctx.request.body.email,
            })
            ctx.body = await ctx.db.Application.create({
                JobId: ctx.request.body.jobId,
                CandidateId: candidate.id
            });
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}