const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  calories: Number,
  is_mb: Boolean,
});

module.exports = mongoose.model('Meal', mealSchema);
