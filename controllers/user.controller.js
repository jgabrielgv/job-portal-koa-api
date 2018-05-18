const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');

module.exports = {
    /**
     * Creates a new User
     * @param {*} ctx 
     */
    async signup(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'please provide the email');
            }
            if (!password) {
                ctx.throw(400, 'please provide the password');
            }

            const encryptedPassword  = await UtilService.hashPassword(password);
            await await ctx.db.User.create({
                email,
                password: encryptedPassword
            });
            ctx.body = 'Signup succesful';
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    async login(ctx) {
        try {
            let { email, password } = ctx.request.body;
            if(!email) {
                ctx.throw(400, 'Please provide the email');
            }
            if(!password) {
                ctx.throw(400, 'Please provide the password');
            }
            const user = await ctx.db.User.findOne({
                where: {
                    email
                }
            });

            if(!user) {
                ctx.throw(400, 'Unable to process request');
            }

            const matched = await UtilService.comparePassword(password, user.password);
            if(matched) {
                const token = JwtService.issue({
                    payload: {
                        user: user.id
                    }
                }, '1 day');
                ctx.body = { token };
            } else {
                ctx.throw(400, 'Invalid password');
            }

        } catch (error) {
            ctx.throw(500, error);
        }
    }
}