const mongoose = require("mongoose");

// const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = process.env.MONGO_URI_LOCALHOST

exports.connect = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // authSource: 'admin',
        // auth: { username: 'docareUser', password: 'docareUser' },
        // driverInfo: { name: 'Mongoose', version: '6.2.1' }
    })
    .then(() => {
        console.log("connected tomdatabase")
    })
    .catch((error) => {
        console.log("error Iot Database connecting")
        console.error(error)
        process.exit(1)
    });
}