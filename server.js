const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

const app = express();

// Initialize DB Pipeline 
connectDB();

// Global System Pipeline Hooks
app.use(cors());
app.use(express.json());

// Main Entry Point API Router Registry Mapping
app.use('/api', apiRoutes);
app.use('/', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`>>> Server Core Active On Internal Port Allocator Context: ${PORT}`));