const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    // FIX: Point to the variable names, not your actual credentials
    user: process.env.SYSTEM_EMAIL, 
    pass: process.env.SYSTEM_EMAIL_PASSWORD 
  }
});

module.exports = transporter;