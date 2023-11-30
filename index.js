const express = require("express");
require("dotenv/config");
require("./db");
const User = require("./models/users");

const app = express();
const port = 5000;

app.use(express.json());

// Get all users from DB //
app.get("/users", async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops! No users were found");
  }
});

// Get one user from DB with ID //
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops! No users were found");
  }
});

// Create a user in DB //
app.post("/users", async (req, res) => {
  try {
    const { name, email, age, phoneNumber } = req.body;
    const user = await User.create({ name, email, age, phoneNumber });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
});

// Starting the server //
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
