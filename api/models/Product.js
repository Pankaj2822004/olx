const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for the Product
const productSchema = new mongoose.Schema({
  img: { type: String, required: true },
  desc: { type: String, required: true },
  cost: { type: String, required: true },
  Location: { type: String, required: true },
  Date: { type: String, required: true },
  type: { type: String, required: true } ,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
