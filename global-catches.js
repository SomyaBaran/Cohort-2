// GLOBAL CATCHES --> global error handler can be implemented as middleware.

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){
    // body: kidneys: [1, 2] --> in the body of postman
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  
  res.send("you have " + kidneys.length + " kidneys");
});

// if something is written different in body of postman --> this will execute
app.use(function(err, req, res, next){
    res.json({
        msg : "sorry! something is up with our server"
    })
})
app.listen(3000);