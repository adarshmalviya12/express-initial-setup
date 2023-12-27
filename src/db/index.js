const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB host : ${connectionInstant.connection.host}`
    );
  } catch (error) {
    console.log(" MongoDB connetion error: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
