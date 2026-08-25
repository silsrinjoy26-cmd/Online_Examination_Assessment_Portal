const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); 
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/online-examination-portal';

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB for Admin seeding...');

    const adminEmail = 'silsrinjoy26@gmail.com';
    const rawPassword = 'ss261005'; 
    // Check if admin already exists to prevent duplicates
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log(`An admin account with the email ${adminEmail} already exists!`);
      mongoose.disconnect();
      return;
    }

    // Securely hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);

    // Create the new administrator payload
    const newAdmin = new User({
      name: 'System Administrator',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin' // Explicitly bypassing the frontend student default restriction
    });

    await newAdmin.save();
    console.log('\n==================================================');
    console.log('🎉 ADMIN ACCOUNT SUCCESSFULLY CREATED!');
    console.log(`📧 Email:    ${adminEmail}`);
    console.log(`🔑 Password: ${rawPassword}`);
    console.log(`🔑 Role: ${newAdmin.role}`);
    console.log('==================================================\n');

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error seeding admin account:', err);
  });