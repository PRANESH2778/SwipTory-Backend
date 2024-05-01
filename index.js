const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 2000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
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
// app.use(cors());
const corsOptions = {
  credentials:true,
  origin:"https://tangerine-brioche-59075a.netlify.app",
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the home" });
});
app.use("/api/user", userRoutes);
app.use("/api/story", statusRoutes);

//Server Listening
app.listen(port, () => {
  console.log(`Listening to the post ${port}`);
});
