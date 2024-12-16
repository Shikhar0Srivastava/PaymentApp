require("dotenv").config();
const JWT_SECRET = process.env.jwtSecret;
module.exports = JWT_SECRET;