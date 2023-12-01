const User = require("../models/users");

// Get all users from DB //
const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! No users were found");
  }
};

// Get one user from DB by ID //
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! No users were found");
  }
};

// Create a user in DB //
const createUser = async (req, res) => {
  try {
    const { name, email, age, phoneNumber } = req.body;
    const user = await User.create({ name, email, age, phoneNumber });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

// Update user information in DB by ID //
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, phoneNumber } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, age, phoneNumber },
      { new: true },
    );
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

// Delete a user from the DB by ID //
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
