const doctorModel = require("../schemas/doctorModel");
const userModel = require("../schemas/userModel");

// =============================
// Get All Doctors
// =============================
const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});

    return res.status(200).send({
      success: true,
      data: doctors,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error fetching doctors",
    });
  }
};

// =============================
// Approve Doctor
// =============================
const approveDoctorController = async (req, res) => {
  try {
    const doctor = await doctorModel.findById(req.body.doctorId);

    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    // Update doctor status
    doctor.status = "approved";
    await doctor.save();

    // Find the corresponding user
    const user = await userModel.findById(doctor.userId);

    if (user) {
      user.isDoctor = true;

      // Create notification array if it doesn't exist
      if (!user.notification) {
        user.notification = [];
      }

      user.notification.push({
        type: "doctor-approved",
        message: "Your Doctor Application has been Approved",
      });

      await user.save();
    }

    return res.status(200).send({
      success: true,
      message: "Doctor Approved Successfully",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error Approving Doctor",
    });
  }
};

module.exports = {
  getAllDoctorsController,
  approveDoctorController,
};