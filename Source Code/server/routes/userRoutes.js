const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  registerController,
  loginController,
  getUserController,
  getUserAppointmentsController,
} = require("../controllers/userController");
const router = express.Router();

// Register
router.post("/register", registerController);

// Login
router.post("/login", loginController);
router.post("/getUserData", authMiddleware, getUserController);
router.get(
  "/getUserAppointments",
  authMiddleware,
  getUserAppointmentsController
);

module.exports = router;