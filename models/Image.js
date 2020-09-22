const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  //   href: String,
  name: String,
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Image", schema);
