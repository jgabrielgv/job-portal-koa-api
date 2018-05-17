module.exports = {
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