const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route   POST /api/users/:userId/cart
// @desc    Authenticate user
// @access  Private
router.post("/", auth, (req, res) => {
  const { userId } = req.params;
  const { fruitId } = req.body;

  User.findById(userId, (err, foundUser) => {
    if (err) res.status(500).json({ msg: "User not found" });

    const newFruit = { id: fruitId, amt: 1 };

    foundUser.cart.push(newFruit);
    foundUser.save();

    res.send(newFruit);
  });
});

// @route   DELETE /api/users/:userId/cart/:fruitId
// @desc    Authenticate user
// @access  Private
router.delete("/:fruitId", auth, (req, res) => {
  const { userId, fruitId } = req.params;

  User.findById(userId, (err, foundUser) => {
    if (err) res.status(500).json({ msg: "User not found" });

    foundUser.cart = foundUser.cart.filter((fruit) => fruit.id != fruitId);

    foundUser.save();

    res.send();
  });
});

module.exports = router;
