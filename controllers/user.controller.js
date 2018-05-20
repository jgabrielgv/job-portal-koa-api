const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');

module.exports = {
    /**
     * @param {object} ctx
     *
     * @api {post} /signup
     * @apiGroup Users
     * @apiName SignupUser
     * @apiParam {String} email user must need to provide the email
     * @apiParam {String} password User must need to provide the password
     * @apiParamExample {String} Request Params:
     * {
     *  "email": "test@email.com",
     *  "password": "password12"
     * }
     * @apiSuccess {String} Msg Signup succesful!
     * @apiSuccessExample {json} Signup-Success-Response:
     * HTTP/1.1 200Ok
     * {
     *  "msg": "Signup succesful!"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/signup
     * @apiDescription User can create new account
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
            ctx.body = 'Signup succesful!';
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    /**
     * @param {*} ctx
     *
     * @api {post} /login
     * @apiGroup Users
     * @apiName LoginUser
     * @apiParam {String} email User must need to provide the email
     * @apiParam {String} password User must need to provide the password
     * @apiParamExample {String} Request Params:
     * {
     *  "email": "test@email.com",
     *  "password": "password12"
     * }
     * @apiSuccess {Object} Token A JSON Web Token to access protected routes
     * @apiSuccessExample {json} Login-Success-Response:
     * HTTP/1.1 200Ok
     * {
     *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOjF9LCJpYXQiOjE1MjY4NTIzMjUsImV4cCI6MTUyNjkzODcyNX0.xeQrMmdA69QWuStKWTegUWNdUik1c5t33-8-TpYJkB0"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/login
     * @apiDescription User can login to the system
     */
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