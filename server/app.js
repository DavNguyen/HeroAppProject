const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//MiddlesWares
app.use(cors());
app.use(bodyParser.json());

//Import Routes (Middleware)
const heroesRoute = require("./routes/heroes");
app.use("/heroes", heroesRoute);

const heroRoute = require("./routes/hero");
app.use("/hero", heroRoute);

//HomePage Route
app.get("/", (req, res) => {
  res.send("Welcome To the HeroDataBase HomePage!");
});

//Connect to DataBase
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DataBase!")
);

//Getting Application to Start Listening to Server AND Specifically on http://localhost:3001/
app.listen(3001);
