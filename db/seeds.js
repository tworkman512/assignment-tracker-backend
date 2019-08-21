const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const config = require("../nodemon.json");
const User = require("../api/models/user");

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true });
  // Careful with .remove() -- it sends a command directly to the database
  // and skips any mongoose validations
  await User.deleteMany(); // Deletes all records
  return User.create([
    {
      email: "admin@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Admin",
      lastName: "User",
      admin: true
    },
    {
      email: "student@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 1",
      admin: false
    },
    {
      email: "student2@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 2",
      admin: false
    },
    {
      email: "student3@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 3",
      admin: false
    },
    {
      email: "student4@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 4",
      admin: false
    },
    {
      email: "student5@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 5",
      admin: false
    },
    {
      email: "student6@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 6",
      admin: false
    },
    {
      email: "student7@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 7",
      admin: false
    },
    {
      email: "student8@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 8",
      admin: false
    },
    {
      email: "student9@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 9",
      admin: false
    },
    {
      email: "student10@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 10",
      admin: false
    }
  ]);
};

reset()
  .catch(console.error)
  .then(response => {
    console.log(`Seeds successfully created ${response.length} records!`);
    return mongoose.disconnect();
  });
