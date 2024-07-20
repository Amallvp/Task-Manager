const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../Models/userModel");
const { param, check, validationResult } = require("express-validator");

// user registeration with validation

// router.post(
//   "/register",
//   [
//     check("name", "Name is required").not().isEmpty(),
//     check("email", "Please include a valid email").isEmail(),
//     check("password", "Password must be at least 6 characters").isLength({
//       min: 6,
//     }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       // Check if the user already exists
//       let User = await Users.findOne({ email }); 
//       if (User) {
//         return res
//           .status(400)
//           .json({ errors: [{ msg: "User already exists" }] });
//       }

//       // Hash the password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);

//       // Save the new user
//       const newUser = new Users({ name, email, password: hashedPassword });
//       const user = await newUser.save();
//       res.status(200).json(user);
//       console.log(token);
//     } catch (err) {
//       res.status(500).json({ errors: [{ msg: "Server error" }] });
//     }
//   }
// );

router.post("/register",async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const newUser = new Users({ name,email,password});
      const user = await newUser.save();
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
  }
);





// Routing for user login 

router.post(
  "/login",

  async (req, res) => {
   
    const { email, password } = req.body;  

    try {
      // Check if the user already exists or not
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // compare Hash the password & user provided password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }

      // token authentication
      const token = jwt.sign({name: 'test'}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log(token);

      res.status(200).json({ user,token });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);


// Routing to get the user information .

router.get(
  "/:id",
  [param("id", "Invalid user ID").isMongoId()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    try {
      const user = await Users.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error." });
    }
  }
);


module.exports = router;
