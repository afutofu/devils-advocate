const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

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

module.exports = router;
