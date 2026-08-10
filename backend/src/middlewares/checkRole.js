exports.checkRole = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.rol)) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  next();
};