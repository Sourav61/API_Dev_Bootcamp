"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phno: Number,
  userType: String
});
var userModel = mongoose.model("User", userSchema);
module.exports = userModel;