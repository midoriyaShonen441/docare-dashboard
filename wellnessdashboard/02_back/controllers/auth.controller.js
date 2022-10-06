const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userInfo = require("../model/user_info");

exports.signup = async (req, res) => {
  const { username, password, domain_id, citizen_id } = req.body;

  userInfo.create(
    {
      user: {
        citizen_id: citizen_id,
        domain_id: domain_id,
        username: username,
        password: bcrypt.hashSync(password, 13),
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({ mesasage: err });
      } else {
        res.status(200).send({ message: "Registered Successfully!" });
      }
    }
  );
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;
  userInfo
    .findOne({
      "user.username": username,
    })
    .populate("user.role", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        res.status(404).send({ message: "User not found!" });
        return;
      }

      //   const passwordValid = bcrypt.compareSync(password, user.user.password);

      //   if (!passwordValid) {
      //     res.status(401).send({
      //       accessToken: null,
      //       message: "Invalid Password!",
      //     });
      //     return ;
      //   }

      if (password !== user.user.password) {
        res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
        return;
      }

      const token = jwt.sign(
        {
          username: user.user.username,
          domain_id: user.user.domain_id,
          role: user.user.role,
        },
        config.secret,
        {
          expiresIn: 86400,
        }
      );

      const authorities = [];
      authorities.push("ROLE_" + user.user.role.toUpperCase());
      console.log("login")

      res.status(200).send({
        username: user.user.username,
        role: authorities,
        accessToken: token,
      });
    });
};
