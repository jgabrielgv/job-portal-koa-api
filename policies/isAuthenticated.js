const JwtService = require('../services/jwt.service');

module.exports = async(ctx, next) => {
  let token = '';
  if(ctx.req.headers && ctx.req.headers.authorization) {
    token = ctx.req.headers.authorization;
  } else {
    ctx.throw(401, 'Authorization header is missing');
  }

  const verificationResponse = JwtService.verify(token);
  if (verificationResponse.error) {
    if (verificationResponse.error.expiredAt) {
      ctx.throw(401, 'Token is expired');
    } else {
      ctx.throw(401, 'Invalid token');
    }
  }

  const user = await ctx.db.User.findOne({
    where: {
      id: verificationResponse.payload.user
    }
  });
  if(user) {
    ctx.state.user = user.id;
    await next();
  } else {
    ctx.throw(401, 'Unauthorized');
  }
};