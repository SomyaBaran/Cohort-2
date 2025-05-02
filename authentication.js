const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "somya@gmail.com",
    password: "123",
    name: "somya baranwal",
  },
  {
    username: "ram@gmail.com",
    password: "123321",
    name: "Ram kumar",
  },
  {
    username: "nayan@gmail.com",
    password: "123321",
    name: "nayan kumar",
  },
];

function userExists(username, password) {
    const user = ALL_USERS.find(
        (user) => user.username === username && user.password === password
      );
    
      if (user) {
        return true;  
      } else {
        return false; 
      }
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword)
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username; 
    res.json(users); 
});

app.listen(3000)