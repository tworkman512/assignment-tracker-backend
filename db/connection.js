const { MONGO_DB_CONNECTION } = process.env;
const mongoose = require("mongoose");

const connectToDB = () => {
  const errorMessage = "No MONGO_DB_CONNECTION was set!";
  try {
    if (!MONGO_DB_CONNECTION) {
      throw errorMessage;
    }

    const options = { useNewUrlParser: true, useFindAndModify: true };
    mongoose.connect(MONGO_DB_CONNECTION, options);
    console.log("Successful connection to database...");
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = connectToDB;
