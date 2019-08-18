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
      name: "Admin User",
      username: "admin@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: true
    },
    {
      name: "Student User 1",
      username: "student@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 2",
      username: "student2@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 3",
      username: "student3@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 4",
      username: "student4@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 5",
      username: "student5@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 6",
      username: "student6@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 7",
      username: "student7@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 8",
      username: "student8@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 9",
      username: "student9@email.com",
      password: bcrypt.hashSync("password", 10),
      admin: false
    },
    {
      name: "Student User 10",
      username: "student10@email.com",
      password: bcrypt.hashSync("password", 10),
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
