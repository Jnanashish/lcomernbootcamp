const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req,res) => {
    return res.send("Hello world")
})
app.get("/signup", (req,res) => {
    return res.send("This is sign up")
})


app.listen(port, () => {console.log(`Server is running on ${port}`)});