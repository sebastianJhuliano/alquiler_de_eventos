const jwt = require('jsonwebtoken');
const { env } = require('../config/env');

exports.verifyToken = (req, res, next) => {
  const token = (req.headers.authorization || '').split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    req.user = jwt.verify(token, env.jwtSecret);
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};