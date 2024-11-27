const express = require("express");
const router = express.Router();

//authentication middleware: check for a valid "name" cookie
function auth(req, res, next) {
  if (req.cookies.name) {
    req.user = req.cookies.name; //store user's name in req.user if cookie is found
    return next(); //proceed to the next middleware or route
  }
  return res.status(401).send("Unauthorized"); //if no cookie, send unauthorized
}
//GET /test: a protected route that requires authentication
router.get('/test', auth, (req, res) => {
  res.status(200).json({ message: `Welcome ${req.user}!` });
});

//POST / logon route: allows the user to log in by providing their name
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.cookie("name", name); //set a cookie named "name" with user name
    return res.status(201).send(`Welcome ${name}`);
  }
  res.status(400).send("Please Provide Credentials");
});

//DELETE /logoff: logs the user out by clearing the cookie!
router.delete("/logoff", (req, res) => {
  res.clearCookie("name");
  res.status(200).json({ message: "You have been logged off" });
});

module.exports = router;
