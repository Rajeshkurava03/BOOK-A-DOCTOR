const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  getAllDoctorsController,
  approveDoctorController,
} = require("../controllers/adminController");

const router = express.Router();

// Get All Doctors
router.get(
  "/getAllDoctors",
  authMiddleware,
  getAllDoctorsController
);

// Approve Doctor
router.post(
  "/approveDoctor",
  authMiddleware,
  approveDoctorController
);

module.exports = router;