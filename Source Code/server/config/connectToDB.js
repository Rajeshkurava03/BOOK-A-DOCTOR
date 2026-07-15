const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ MongoDB Connection Error");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;