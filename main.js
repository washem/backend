const express = require('express')
const app = express()

app.get('/', function (req, res) {
    //res.header("Access-Control-Allow-Origin", "*");
    res.send("hello eric")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})