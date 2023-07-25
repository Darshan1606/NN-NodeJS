const express = require("express");
const wokrouts = require("./routes/workouts");

// express app
const app = express();

// routes
app.use("/api/workouts", wokrouts);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on PORT ", process.env.PORT);
});
