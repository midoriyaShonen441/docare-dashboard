const jwt = require("jsonwebtoken");
const { resource } = require("../app.js");
const config = require("../config/auth.config.js");
const userInfo = require("../model/user_info");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.username = decoded.username;
    req.domain_id = decoded.domain_id;
    next();
  });
};

isMaster = (req, res, next) => {
  userInfo.findOne({ "user.username": req.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    try {
      if (user.user.role === "Master") {
        next();
        return;
      }
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(403).send({ message: "Require Master Role!" });
    return;
  });
};

isManager = (req, res, next) => {
  userInfo.findOne({ "user.username": req.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    try {
      if (user.user.role === "Manager") {
        next();
        return;
      }
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(403).send({ message: "Require Manager Role!" });
    return;
  });
};

isAdmin = (req, res, next) => {
  userInfo.findOne({ "user.username": req.username }).exec((err, user) => {
    
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    try {
      if (user.user.role === "Admin") {
        next();
        return;
      }
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(403).send({ message: "Require Admin Role!" });
    return;
  });
};

isStaff = (req, res, next) => {
  userInfo.findOne({ "user.username": req.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    try {
      if (user.user.role !== "User") {
        next();
        return;
      }
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(403).send({ message: "Require Staff Role!" });
    return;
  });
};


const authJwt = {
  verifyToken,
  isMaster,
  isManager,
  isAdmin,
  isStaff,
};

module.exports = authJwt;
