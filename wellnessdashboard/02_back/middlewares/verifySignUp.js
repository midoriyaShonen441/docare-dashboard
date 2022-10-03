const { findOne } = require("../model/user_info");
const userInfo = require("../model/user_info");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  userInfo
    .findOne({
      username: req.body.username,
    })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res
          .status(400)
          .send({ message: "Failed! Username is already in use!" });
        return;
      }

      next();
      //// Email
      // userInfo.findOne({
      //   email: req.body.email
      // }).exec((err, user) => {
      //   if (err) {
      //     res.status(500).send({ message: err });
      //     return;
      //   }

      //   if (user) {
      //     res.status(400).send({ message: "Failed! Email is already in use!" });
      //     return;
      //   }

      //   next();
      // });
    });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.role) {
    userInfo
      .findOne({
        "user.role": req.body.role,
      })
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        } 
        if (user) {
            next();
            return
        }
      });
  }

};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
