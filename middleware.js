// This is the ugly way of creating a middlewares because what is we want to introduce another route that does kidney authentication --> we will have to repeat the code --> bad practice --> dry run 

const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res) {
     
    if(username != "somya" || password != "pass"){
        res.status(403).json({
            msg: "Unauthorized",
        });
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong input",
        });
        return;
    }
    res.send("your kidney is healthy");
});
app.listen(3000);

// Good practice -->  create a middleware function that will check the authentication and authorization of the user and then call the next function in the chain.

function userMiddleware(req, res, next){
    if(usename != "somya" && password != "pass"){
        res.status(403).json({
            msg: "incorrect",
        }); 
    } 
    else{
            next();
        }  
};
function kidneyMiddleware(req, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "incorrect inputs"
        });
    }
    else{
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("your health is fine!")
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("your kidney is fine!")
});

app.get("/heart-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("your heart is fine!")
});

app.listen(3000);


/////////////////////

let numberOfRequests = 0;

// Middleware function to calculate requests
function calculateRequests(req, res, next) {
    numberOfRequests++;  // Increment the number of requests
    console.log(numberOfRequests);  // Log the number of requests
    next();  // Proceed to the next middleware or route handler
}

// Apply the middleware globally (for all routes)
app.use(calculateRequests);

// To parse incoming JSON request bodies
app.use(express.json());

// POST route
app.post("/health-checkup", function (req, res) {
    res.send("Health checkup completed!");  // Response to POST request
});

// GET route
app.get("/health-checkup2", function (req, res) {
    res.send("Health checkup2 completed!");  // Response to GET request
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
