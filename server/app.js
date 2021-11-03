const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//MiddlesWares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//Connect to DataBase
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DataBase!")
);

//Getting Application to Start Listening to Server
app.listen(3000);
