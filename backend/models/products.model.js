const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
