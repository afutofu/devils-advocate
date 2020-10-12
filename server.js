const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 5000;

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// IMPORT ROUTES
const devilFruitRoutes = require("./routes/api/devilfruits");
const userRoutes = require("./routes/api/users");
const cartRoutes = require("./routes/api/cart");
const authRoutes = require("./routes/api/auth");

// ROUTES
app.use("/api/fruits", devilFruitRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users/:userId/cart", cartRoutes);
app.use("/api/auth", authRoutes);

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to DB")
);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
