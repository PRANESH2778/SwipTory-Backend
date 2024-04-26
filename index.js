const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 2000;
const userRoutes = require("./routes/UserRoutes");
const statusRoutes = require("./routes/StatusRoutes");
const app = express();
const cors = require("cors");
require("dotenv").config();
//Connecting Database
console.log(process.env.MONGODB_URI)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Db");
  })
  .catch((error) => {
    console.log(error);
    console.log("error Connecting db");
  });
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the home" });
});
app.use("/api/user", userRoutes);
app.use("/api/story", statusRoutes);

//Server Listening
app.listen(port, () => {
  console.log(`Listening to the post ${port}`);
});
