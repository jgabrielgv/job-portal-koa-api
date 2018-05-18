const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

module.exports = {
  /**
   * Hashes a password
   * @param {string} password
   * @returns string
   */
  async hashPassword(password) {
    try {
      return await bcrypt.hash(password, SALT_ROUND);
    } catch (error) {
      throw error;
    }
  },
  /**
   * Compares a plain password with a hash
   * @param {string} password
   * @param {string} hash
   * @returns bool
   */
  async comparePassword(password, hash) {
    try {
      return await bcrypt.compare(password, hash);
    } catch (error) {
      throw error;
    }
  }
};