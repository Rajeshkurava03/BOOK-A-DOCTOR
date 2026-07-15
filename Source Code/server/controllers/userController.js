const userModel = require("../schemas/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const appointmentModel = require("../schemas/appointmentModel");

// ================= Register =================
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      email: req.body.email,
    });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      salt
    );

    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      }
    );

    return res.status(201).send({
      success: true,
      message: "Registration Successful",
      token,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// ================= Login =================
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).send({
      success: true,
      message: "Login Successful",
      token,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// ================= Get User =================
const getUserController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    user.password = undefined;

    return res.status(200).send({
      success: true,
      data: user,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error fetching user",
    });
  }
};

// ================= User Appointments =================
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
      message: "Error fetching appointments",
    });
  }
};

module.exports = {
  registerController,
  loginController,
  getUserController,
  getUserAppointmentsController,
};