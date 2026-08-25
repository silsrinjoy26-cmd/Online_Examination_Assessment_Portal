const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('>>> MongoDB Connection Established Successfully.');
  } catch (err) {
    console.error('!!! Critical Database Connection Blocked:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;