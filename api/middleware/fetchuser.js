
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'pankajisgoodboy'; // Ensure this is consistent across your application

const fetchUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log("Token received by server:", token); // Debug token reception

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Invalid token error:', error.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = fetchUser;


