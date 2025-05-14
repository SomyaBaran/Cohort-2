//

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const USER = {
  id: '1',
  username: 'somya',
  password: '1234'
};

const SECRET_KEY = 'mySecretKey';
app.post("/login", (req, res) => {
    const {username, password} = req.body;
    if(username == USER.username && password == USER.password){
        const token = jwt.sign({
            id: USER.id,
            username: USER.username,
            },
            SECRET_KEY, 
            {expiresIn: '1h'}
        );  
        res.json({ message: 'Login successful', token});
    }
    else{
       res.status(401).json({message: "Invalid Credentials"});
    }
})


// Middleware to Protect Routes
//  function authenticateToken(req, res, next){
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(' ')[1];

//     if(!token) return res.sendStatus(401);
//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if(err){
//             return res.sendStatus(403);
//         }
//         req.user = user;
//         next();
//     })
//  }

 app.listen(3000);
