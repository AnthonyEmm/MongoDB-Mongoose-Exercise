const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, min: 18 },
  phoneNumber: { type: Number, unique: true, required: true },
  isActive: { type: Boolean, default: true },
});

const User = model("User", userSchema);

module.exports = User;
