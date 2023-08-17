const express = require("express");

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get All Workouts" });
});

//get single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get Single Workouts" });
});

//add workout
router.post("/", (req, res) => {
  res.json({ message: "ADD Workouts" });
});

//delete workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE Workouts" });
});

//update workout
router.put("/:id", (req, res) => {
  res.json({ message: "UPDATE Workouts" });
});

module.exports = router;
