const express = require("express");
const router = express.Router();

//  DevilFruit Model
const DevilFruit = require("../../models/DevilFruit");

// @route   GET /api/fruits
// @desc    Get All Fruits
// @access  Public
router.get("/", (req, res) => {
  DevilFruit.find((err, fruits) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(fruits);
  });
});

module.exports = router;
