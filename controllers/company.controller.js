module.exports = {
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
                address
            }

            ctx.body = await ctx.db.Company.create(company);
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}