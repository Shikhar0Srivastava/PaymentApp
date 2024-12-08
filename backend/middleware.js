const jwt = require("jsonwebtoken");
const secret = require("./config");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.sendStatus(403);
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded;
        next();
    } catch (e) {
        return res.sendStatus(403);
    }
}

module.exports = authMiddleware;