const express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware establised

app.use(express.json());
app.use(cors());


// Routing 

app.use('/api/users', require('./Routes/auth'));





// MongoDB connection

Mongoose.connect(MongoDB_BASE_URL="mongodb://localhost:27017",{
    dbName: 'Task-Manager',
}).then(()=>{
    console.log("DataBase connected");
}).catch((error)=>{
    console.error('DB connection error:', error);
})



const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});



