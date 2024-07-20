const express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Middleware establised

app.use(express.json());
app.use(cors({origin:"*"}));

// Routing

app.use("/api/users", require("./Routes/auth"));
app.use("/api/", require("./Routes/test"));

// MongoDB connection

Mongoose.connect(process.env.MongoDB_BASE_URL, { dbName: "Task-Manager" })
  .then(() => console.log("DataBase connected"))
  .catch((error) => console.error("DB connection error:", error));

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
