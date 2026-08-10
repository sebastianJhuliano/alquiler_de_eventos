exports.ok = (res, data, status = 200) => {
  res.status(status).json({ ok: true, data });
};

exports.fail = (res, message, status = 400) => {
  res.status(status).json({ ok: false, message });
};