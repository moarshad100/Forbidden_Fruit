const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Member = model("Member", memberSchema);

module.exports = Member;
