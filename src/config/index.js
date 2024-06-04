
export default {
  PORT: process.env.PORT || 3000,
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3000',
  DB: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  },
  // EMAIL: {
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   user: process.env.EMAIL_USER,
  //   password: process.env.EMAIL_PASSWORD
  // },
  // JWT_SECRET: process.env.JWT_SECRET,
  // JWT_NAME_COOKIE: process.env.JWT_NAME_COOKIE,
  // COOKIE_SECRET: process.env.COOKIE_SECRET,
  // COOKIE_PRIVATE_KEY: process.env.COOKIE_PRIVATE_KEY
};