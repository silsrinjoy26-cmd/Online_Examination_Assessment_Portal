const Tutorial = require('../models/Tutorial');

exports.uploadTutorial = async (req, res) => {
  try {
    const tutorial = new Tutorial({ ...req.body, uploadedBy: req.user.id });
    await tutorial.save();
    res.status(201).json({ message: 'Lecture archive successfully updated.', tutorial });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find().populate('uploadedBy', 'name');
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};