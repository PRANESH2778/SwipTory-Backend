const jwt = require("jsonwebtoken");

//Creating a authentication for verifying the user
const verifyJwt = (req, res, next) => {
  try {
    //Getting the token
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "unAuthorized User" });
    }
    //Decoding the token to get userId
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ message: "unAuthorized User" });
    }
    req.body.userId = decode.userId;
    next();
  } catch (error) {
    res.status(402).json({ message: "Invalid Token" });
  }
};
module.exports = {verifyJwt};
