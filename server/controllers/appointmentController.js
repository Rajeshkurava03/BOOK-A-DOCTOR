const appointmentModel = require("../schemas/appointmentModel");
const doctorModel = require("../schemas/doctorModel");

// =============================
// Book Appointment
// =============================
const bookAppointmentController = async (req, res) => {
  try {
    const newAppointment = new appointmentModel({
      userId: req.user.id,
      doctorId: req.body.doctorId,
      userName: req.body.userName,
      doctorName: req.body.doctorName,
      date: req.body.date,
      time: req.body.time,
      document: req.body.document || "",
      status: "pending",
    });

    await newAppointment.save();

    return res.status(201).send({
      success: true,
      message: "Appointment Booked Successfully",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error Booking Appointment",
    });
  }
};

// =============================
// Get User Appointments
// =============================
const getUserAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      userId: req.user.id,
    });

    return res.status(200).send({
      success: true,
      data: appointments,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error Fetching Appointments",
    });
  }
};

// =============================
// Get Doctor Appointments
// =============================
const getDoctorAppointmentsController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({
      userId: req.user.id,
    });

    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    const appointments = await appointmentModel.find({
      doctorId: doctor._id,
    });

    return res.status(200).send({
      success: true,
      data: appointments,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error Fetching Doctor Appointments",
    });
  }
};

// =============================
// Update Appointment Status
// =============================
const updateAppointmentStatusController = async (req, res) => {
  try {
    const appointment = await appointmentModel.findById(req.body.appointmentId);

    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: "Appointment not found",
      });
    }

    appointment.status = req.body.status;
    await appointment.save();

    return res.status(200).send({
      success: true,
      message: "Appointment Updated Successfully",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error Updating Appointment",
    });
  }
};

module.exports = {
  bookAppointmentController,
  getUserAppointmentsController,
  getDoctorAppointmentsController,
  updateAppointmentStatusController,
};