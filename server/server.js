const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const wokrouts = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url} - ${req.path}`);
  next();
});

// routes
app.use("/api/workouts", wokrouts);

// connect to mongodb & listen for requests
const dbURI = process.env.MONGO_URL;
mongoose
  .connect(dbURI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("DB Connnected... & listening on PORT ", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
