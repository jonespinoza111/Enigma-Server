const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionSchema = new Schema({
  id: { type: Number, required: true },
  cardTitle: { type: String, required: true},
  cardImage: { type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  filters: [{ type: String }],
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;