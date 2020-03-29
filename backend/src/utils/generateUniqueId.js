const crypto = require('crypto');

module.exports = function generateIniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}