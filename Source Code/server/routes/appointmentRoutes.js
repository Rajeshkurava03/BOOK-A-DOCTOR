const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  bookAppointmentController,
  getUserAppointmentsController,
  getDoctorAppointmentsController,
  updateAppointmentStatusController,
} = require("../controllers/appointmentController");

const router = express.Router();

// Book Appointment
router.post(
  "/bookAppointment",
  authMiddleware,
  bookAppointmentController
);

// User Appointments
router.get(
  "/getUserAppointments",
  authMiddleware,
  getUserAppointmentsController
);

// Doctor Appointments
router.get(
  "/getDoctorAppointments",
  authMiddleware,
  getDoctorAppointmentsController
);

// Update Appointment Status
router.post(
  "/updateAppointmentStatus",
  authMiddleware,
  updateAppointmentStatusController
);

module.exports = router;