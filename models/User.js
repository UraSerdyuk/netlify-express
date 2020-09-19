const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = model("User", schema);
