const jwt = require('jsonwebtoken');
const SECRET = 'testsecret';

function generateToken(email) {
  return jwt.sign({ email }, SECRET, { expiresIn: '1h' });
}

module.exports = { generateToken };
