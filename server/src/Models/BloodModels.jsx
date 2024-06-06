const mongoose = require("mongoose");

const BloodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  bloodGroup: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ano_phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },

  social: {
    type: String,
    required: false,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Blood = mongoose.model("blood", BloodSchema);

module.exports = Blood;
