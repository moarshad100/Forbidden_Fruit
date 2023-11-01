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
  father: {
    type: String,
    required: true,
  },
  mother: {
    type: String,
    required: true,
  },
  spouse: {
    type: String,
    required: false,
  },
  children: {
    type: String,
    required: false,
  },
});

const Member = model("Member", memberSchema);

module.exports = Member;
