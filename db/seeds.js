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
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student2@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 2",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student3@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 3",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student4@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 4",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student5@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 5",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student6@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 6",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student7@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 7",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student8@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 8",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student9@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 9",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    },
    {
      email: "student10@email.com",
      password: bcrypt.hashSync("password", 10),
      firstName: "Student",
      lastName: "User 10",
      admin: false,
      assignments: [
        {
          title: "HTML & CSS Final Project",
          projectDescription: "My final project for the HTML & CSS course.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Flexbox Exercise",
          projectDescription: "An exercise for working with Flexbox.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        },
        {
          title: "Homework 3",
          projectDescription: "This is a test.",
          projectLink: "https://www.google.com/",
          graded: false,
          score: 0
        }
      ]
    }
  ]);
};

reset()
  .catch(console.error)
  .then(response => {
    console.log(`Seeds successfully created ${response.length} records!`);
    return mongoose.disconnect();
  });
