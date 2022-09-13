require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 8989

app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}: http://localhost:${PORT}`)
})