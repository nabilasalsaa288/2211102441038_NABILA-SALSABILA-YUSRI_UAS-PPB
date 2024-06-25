

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token tidak ditemukan. Akses ditolak.' });
  }

  jwt.verify(token, 'dsadzvxvfer23432312', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token tidak valid. Akses ditolak.' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
