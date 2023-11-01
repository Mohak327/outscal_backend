var express = require('express');
// const { userCredentials } = require("../data/userCredentials");
var router = express.Router();

const userCredentials = [
  {
      "username": "bhavyam",
      "email": "bhavyam@gmail.com",
      "password": "bhavyam123",
      "active_module": "admin"
  },
  {
      "username": "mohak",
      "email": "mohak@gmail.com",
      "password": "mohak123",
      "active_module": "user"
  }
];

// Runs on http://localhost:3000/users
router.get('/users', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(userCredentials);
});

module.exports = router;
