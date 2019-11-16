const mongoose = require('mongoose');

const ColorsSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  mainColor: {
    type: String,
    required: true
  },
  secondaryColors: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('colors', ColorsSchema);