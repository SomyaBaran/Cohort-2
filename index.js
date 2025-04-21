// Creating a Basic HTTP Server

const express = require("express");
const app = express();

function sum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
app.get("/", function(req, res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("hell, your ans is," + ans)
})
app.listen(3000);