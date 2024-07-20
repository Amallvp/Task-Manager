const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Users = require("../Models/userModel");
const Tasks = require("../Models/TaskModels.js");

const jwtAuth = (req, res, next) => {
    const token = req.headers["access_token"] 
  

  if (!token) return res.status(401).json(err);
  console.log(err);

  jwt.verify(token,"secretkey123", (err,decoded) => {
    if (err) {
      return res.status(400).json();
      ;
    }
  else console.log(decoded);
 

    next();
  });
};







router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new Users({ name, email, password });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
});





router.post("/login", async (req, res) => {
  const { email} = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = jwt.sign({ name: "test" },"secretkey123", {
      expiresIn: "1h",
    });
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(err);
  }
});






router.post("/create", jwtAuth, async (req, res) => {
  const { title, descrip } = req.body;
  const { user } = req.user;

  try {
    const newTask = new Tasks({ title, descrip, userId: user._id });
    const task = await newTask.save();
    return res.status(201).json(task); // Return after sending the response
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" }); // Return after sending the response
  }
});

module.exports = router;
