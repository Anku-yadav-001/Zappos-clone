const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: [String], 
    required: true
  },
  rating: {
    type: [Number],
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  colors: {
    type: [String],
    required: true
  }
}, { timestamps: true });

const shopModel = mongoose.model('Shop', shopSchema);

module.exports = shopModel;
