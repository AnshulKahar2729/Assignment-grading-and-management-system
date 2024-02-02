const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.user = payload;
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
