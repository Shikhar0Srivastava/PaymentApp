require("dotenv").config();
const JWT_SECRET = process.env.jwtSecret;
const CONNECTION_STRING = process.env.connectionString
module.exports = {
    JWT_SECRET,
    CONNECTION_STRING
};