const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        return next();
    } catch (e) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
module.exports = authMiddleware;