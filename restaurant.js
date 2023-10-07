const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  websiteUrl: String,
  address: String,
  PhoneNo: Number,
  logoUrl: String,
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);


