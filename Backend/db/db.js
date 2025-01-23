const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECT).then(() => {
      console.log("Connected to MongoDB DataBase");
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDB;
