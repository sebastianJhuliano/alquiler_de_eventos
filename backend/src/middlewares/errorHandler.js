exports.notFound = (req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
};

exports.errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
  });
};