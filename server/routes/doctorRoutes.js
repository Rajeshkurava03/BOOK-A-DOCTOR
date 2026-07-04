const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  applyDoctorController,
  getApprovedDoctorsController,
} = require("../controllers/doctorController");

const router = express.Router();

// Apply Doctor
router.post(
  "/applyDoctor",
  authMiddleware,
  applyDoctorController
);

// Get Approved Doctors
router.get(
  "/getApprovedDoctors",
  authMiddleware,
  getApprovedDoctorsController
);

module.exports = router;