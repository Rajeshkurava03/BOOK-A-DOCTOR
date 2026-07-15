const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  applyDoctorController,
  getApprovedDoctorsController,
  getDoctorInfoController,
} = require("../controllers/doctorController");

const router = express.Router();

// =======================
// Apply Doctor
// =======================
router.post(
  "/applyDoctor",
  authMiddleware,
  applyDoctorController
);

// =======================
// Get Approved Doctors
// =======================
router.get(
  "/getApprovedDoctors",
  authMiddleware,
  getApprovedDoctorsController
);

// =======================
// Get Logged-in User Doctor Application
// =======================
router.get(
  "/getDoctorInfo",
  authMiddleware,
  getDoctorInfoController
);

module.exports = router;