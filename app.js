require('dotenv').config();
// Import required packages and modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
// const imageRoutes = require('./routes/imageRoutes');
// const inventoryRoutes = require('./routes/inventoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const collectionRoutes = require('./routes/collectionRoutes');

const connectToDatabase = require('./config/database');

connectToDatabase();

// Create an instance of the Express application
const app = express();

// Middleware for parsing request bodies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route handlers
// app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
// app.use('/images', imageRoutes);
// app.use('/inventory', inventoryRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
// app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);
app.use('/collections', collectionRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});