const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
  stockQuantity: {
    type: Number,
    default: 0,
  },
  available: {
    type: Boolean,
    default: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
});

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    variations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Variation',
    }],
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
  });

const Product = mongoose.model('Product', productSchema);
const Variation = mongoose.model('Variation', variationSchema);

module.exports = { Product, Variation };