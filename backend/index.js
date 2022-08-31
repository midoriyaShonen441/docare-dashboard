const app = require("./app");
const PORT = 5555

app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}: http://localhost:${PORT}`)
})