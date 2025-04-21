
/// LOGICS FOR SERVER
//GET --> get the required data from the server according to the users request
//POST --> inserting something new in the server
//PUT --> updating something in the server
//DELETE --> deleting something from the server



const express = require("express");
const app = express(); // app is like your server 

const users = [{ // this is an array of objects
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

// req = request
// res = response
app.get("/", function(req, res) { //We're defining a route for when someone visits the homepage ("/").
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// 411
app.put("/", function(req, res) {
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealhty kidneys
app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(3000);
