const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Route: GET /collections
router.get('/', collectionController.getCollections);

// Route: GET /collections/:id
router.get('/:id', collectionController.getCollectionById);

// Route: POST /collections
router.post('/', collectionController.createCollection);

// Route: PUT /collections/:id
router.put('/:id', collectionController.updateCollection);

// Route: DELETE /collections/:id
router.delete('/:id', collectionController.deleteCollection);

module.exports = router;