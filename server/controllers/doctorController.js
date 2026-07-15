const doctorModel = require("../schemas/doctorModel");
const userModel = require("../schemas/userModel");

// =======================
// Apply Doctor
// =======================
const applyDoctorController = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    req.body.status = "pending";

    const newDoctor = new doctorModel(req.body);
    await newDoctor.save();

    const admin = await userModel.findOne({ type: "admin" });

    if (admin) {
      admin.notification.push({
        type: "apply-doctor-request",
        message: `${req.body.fullName} has applied as a Doctor`,
        data: {
          doctorId: newDoctor._id,
          name: req.body.fullName,
        },
      });

      await admin.save();
    }

    return res.status(201).send({
      success: true,
      message: "Doctor application submitted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error while applying as doctor",
    });
  }
};

// =======================
// Get Approved Doctors
// =======================
const getApprovedDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({
      status: "approved",
    });

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

// =======================
// Get Logged-in User Doctor Application
// =======================
const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel
      .findOne({
        userId: req.user.id,
      })
      .sort({ createdAt: -1 });

    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "No doctor application found",
      });
    }

    return res.status(200).send({
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error fetching doctor application",
    });
  }
};

module.exports = {
  applyDoctorController,
  getApprovedDoctorsController,
  getDoctorInfoController,
};