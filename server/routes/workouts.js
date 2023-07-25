const express = require("express");

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get All Workouts" });
});

//get single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get All Workouts" });
});

module.exports = router;
