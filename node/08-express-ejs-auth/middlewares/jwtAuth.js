const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Format: Bearer <token>
  if (!token) {
    return res.status(401).json({ message: 'Access Denied: Invalid token format' });
  }

  try {
    const verified = jwt.verify(token, config.get('jwtSecret'));
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};
