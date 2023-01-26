const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  name: String,
  price: {
    type: Number,
    default: 0
  },
  medRecipe: {
    default: false,
    type: Boolean
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;