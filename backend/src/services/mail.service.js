const nodemailer = require('nodemailer');
const { env } = require('../config/env');

const transporter = nodemailer.createTransport({
  host: env.mail.host,
  port: 587,
  secure: false,
  auth: {
    user: env.mail.user,
    pass: env.mail.pass,
  },
});

exports.sendMail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: env.mail.user,
    to,
    subject,
    html,
  });
};