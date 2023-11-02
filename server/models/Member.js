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
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  spouse: {
    type: String,
  },
  children: {
    type: String,
  },
});

const Member = model("Member", memberSchema);

module.exports = Member;
