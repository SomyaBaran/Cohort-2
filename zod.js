// Zod is a TypeScript-first validation library that helps you validate and ensure the correctness of data.


const express = require("express");
const zod = require("zod"); 
const app = express();

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}

app.post("/login", function(req, res){
    const response = validateInput(req.body)
    if (!response.success){
        res.json({
            msg: "the input is invalid"
        });
        return;
    }
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UNDERSTANDING BETTER 



// const express = require("express");
// const zod = require("zod"); 
// const app = express();

app.use(express.json()); // middleware --> Whatever is in the request body, if it's in JSON format, please parse it into a JavaScript object.

const schema = zod.object({ //holds an object created using Zod's API
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.post("/login", function(req, res){
    const response = schema.safeParse(req.body) // safeParse --> checks if things from req.body is matching with schema 
    if(!response.success){
            return res.status(411).json({
            msg: "input is invalid"
        })
    } 
    res.json({
        msg: "input is valid",
        data: response.data // send back the validated data
    });
});

app.listen(3000);
