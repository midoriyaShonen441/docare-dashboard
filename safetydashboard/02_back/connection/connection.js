const mongoose = require("mongoose");
require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI = process.env.MONGO_URI_LOCALHOST
const MONGO_URI = "mongodb://docareUser:docareUser@db:27017/safetydb";

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
      // driverInfo: { name: 'Mongoose', version: '6.2.1' }
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
