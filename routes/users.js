const express = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).post(createUser);

usersRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = usersRouter;
