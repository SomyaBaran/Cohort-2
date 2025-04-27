// find the average time your server is taking to handle the request

const express = require("express");
const app = express();

let totalTime = 0;
let numberOfRequests = 0;

function measureTime(req, res, next){
    const startTime = Date.now(); // captures the current time 

    res.on('finish', function(){
        const endTime = Date.now(); // captures the end time 
        const requestDuration = endTime - startTime;  // (Calculates the duration of the request)
        totalTime = totalTime + requestDuration;  //totalTime accumulates the duration of each request.
        numberOfRequests++; //numberOfRequests is incremented each time a new request is handled.

        console.log(totalTime / numberOfRequests);  // logic for calculating average time 
    });
    next();
}

app.use(measureTime);
app.listen(3000)



