const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  console.log("TOKEN");
  const [type, reqToken] = (req.get("Authorization") || "").split(" ");

  if (!reqToken) {
    return res.status(401).json({ msg: "no se envio el token" });
  }

  jwt.verify(reqToken, "SECRET", (err, payload) => {
    if (err) return res.status(401).json({ msg: "el token no es valido" });
    req.payload = payload;
    console.log("NEXT");
    next();
  });
};

module.exports = validateJWT;