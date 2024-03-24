const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server Running in : http://localhost:3000")
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
})

app.get("/q1", (req, res) => {
    res.sendFile(__dirname + '/pages/q1.html');
})

app.get("/q2", (req, res) => {
    res.sendFile(__dirname + '/pages/q2.html');
})

app.get("/q3", (req, res) => {
    res.sendFile(__dirname + '/pages/q3.html');
})

app.get("/q4", (req, res) => {
    res.sendFile(__dirname + '/pages/q4.html');
})

app.get("/q5", (req, res) => {
    res.sendFile(__dirname + '/pages/q5.html');
})

app.get("/result", (req, res) => {
    res.sendFile(__dirname + '/pages/result.html');
})



// 뭐 콜해주면
// app.get("/Q1", ((request, response) => {
//     response.sendFile("데이터")
//     response.UplodaFile
// })