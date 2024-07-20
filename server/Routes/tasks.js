const router = require("express").Router();
const Tasks = require("../Models/TaskModels.js");
const Users = require('../Models/userModel.js')
const {jwtAuth}=require('../Middleware/auth')
const jwt = require("jsonwebtoken");
const { param, body, validationResult } = require("express-validator");
//.............creating a user todo task.......................//

router.post("/create",jwtAuth,

  async (req, res) => {
    const {title,descrip}=req.body
    const{user}=req

    try {
      const newTask =new Tasks({title,descrip,userId:user._id});
      const task = await newTask.save();

      return res.status(201).json(task); // Return after sending the response
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" }); // Return after sending the response
    }
  }
);


//.............updating the todo task list.......................//

router.put("/update/:id",
  [
    param("id", "Invalid task ID").isMongoId(),
    body("title").optional().notEmpty().withMessage("Title must not be empty"),
    body("descrip").optional().notEmpty().withMessage("Description must not be empty"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    try {
      // Check if the task exists
      const task = await Tasks.findById(id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      // Update the task with the provided data
      const updatedTask = await Tasks.findByIdAndUpdate(
        id,
        { $set:req.body},
        { new: true, runValidators: true } // `new: true` returns the updated document
      );

      res.status(200).json(updatedTask);
    } catch (err) {
      res
        .status(500)
        .json({ message: "An error occurred while updating the task" });
    }
  }
);


router.get('/', async (req, res) => {
    try {
      const tasks = await Tasks.find({ user: req.user.id });
      res.status(200).json(tasks);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while retrieving tasks.' });
    }
  });
  


module.exports = router;
