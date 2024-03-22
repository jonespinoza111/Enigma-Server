require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    // Connect to the database
    const CONNECTION_URL = `mongodb+srv://${process.env.CLUSTER_USERNAME}:${process.env.CLUSTER_PASSWORD}@${process.env.CLUSTER_NAME}.oi0ce.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.CLUSTER_DB}'`;
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to this great database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectToDatabase;