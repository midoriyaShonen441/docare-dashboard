const mongoose = require("mongoose");
require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI; // Deploy
const MONGO_URI = process.env.MONGO_URI_LOCAL; // Dev



exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        authSource: "admin",
      },
      user: "docareUser",
      pass: "docareUser",
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("error Database connecting");
      console.error(error);
      process.exit(1);
    });
};
