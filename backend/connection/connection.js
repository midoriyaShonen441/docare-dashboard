const mongoose = require("mongoose");
// const MONGO_URI = "mongodb://root:root@db:27017/safetydb"
const MONGO_URI = "mongodb://127.0.0.1:27017/scgemotion"

exports.connect = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // authSource: 'admin',
        // auth: { username: 'root', password: 'root' },
        // driverInfo: { name: 'Mongoose', version: '6.2.1' }
    })
    .then(() => {
        console.log("connected to Iot database")
    })
    .catch((error) => {
        console.log("error Iot Database connecting")
        console.error(error)
        process.exit(1)
    });
}