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
    },
    /**
     * Find all the companies
     * @param {*} ctx 
     */
    async find(ctx) {
        try {
            ctx.body = await ctx.db.Company.findAll({
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