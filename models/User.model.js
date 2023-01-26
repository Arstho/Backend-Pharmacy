const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  wallet: {
    type: Number,
    default: 0
  },
  recipe: {
    type: Boolean,
    default: false
  },
  basket: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',
  }],
  total: {
    type: Number,
    default: 0
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;