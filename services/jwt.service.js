const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = {
  /**
   * Issues a new jwt token
   * @param {object} payload
   * @param {string} expiresIn
   * @returns string
   */
  issue(payload, expiresIn) {
    return jwt.sign(payload, config.development.secret, {
      expiresIn
    });
  },
  /**
   * Verifies a token
   * @param {*} token
   * @returns {object}
   */
  verify(token) {
    return jwt.verify(token, config.development.secret, (error, decoded) => {
      return error ? { error } : decoded;
    });
  }
};