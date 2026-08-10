const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: {
    port: process.env.PORT || 4000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || 'secret_dev',
    mail: {
      host: process.env.MAIL_HOST,
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  },
};