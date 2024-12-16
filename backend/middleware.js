const jwt = require("jsonwebtoken");
const secret = require("./config");

function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.sendStatus(403);
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.sendStatus(403);
        }
            const decoded = jwt.verify(token, secret);
            req.userId = decoded;
            next();
    } catch (e) {
        console.error(e)
        return res.sendStatus(500);
    }
}

module.exports = authMiddleware;