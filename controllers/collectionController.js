const Collection = require('../models/Collection');

// GET /collections
exports.getCollections = async (req, res) => {
  try {
    // const collections = await Collection.find({}).populate('products');

    const collections = await Collection.find({}).populate({
        path: 'products',
        populate: {
          path: 'variations',
          model: 'Variation' // Replace with the actual name of the Variation model
        }
      });
    res.status(200).json({ success: true, data: collections });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /collections/:id
exports.getCollectionById = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).populate('products');
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Collection not found' });
    }
    res.status(200).json({ success: true, data: collection });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST /collections
exports.createCollection = async (req, res) => {
  try {
    const newCollection = await Collection.create(req.body);
    res.status(201).json({ success: true, data: newCollection });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// PUT /collections/:id
exports.updateCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Collection not found' });
    }
    res.status(200).json({ success: true, data: collection });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE /collections/:id
exports.deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params.id);
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Collection not found' });
    }
    res.status(200).json({ success: true, data: collection });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};