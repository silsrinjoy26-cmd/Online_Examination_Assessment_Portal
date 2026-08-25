const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email index already registered.' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "Account profile provisioned successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid authentication credentials.' });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).json({ message: 'Invalid authentication credentials.' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role, name: user.name }, 
      process.env.JWT_SECRET, 
      { expiresIn: '12h' }
    );
    res.json({ token, role: user.role, name: user.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to access system registry.' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    const deletedStudent = await User.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student records not found in database.' });
    }

    res.json({ success: true, message: 'Student successfully dropped from database registry.' });
  } catch (err) {
    console.error('Database deletion error:', err);
    res.status(500).json({ error: 'Internal server error processing deletion request.' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const studentId = req.user.id; // Pulled from your authMiddleware token payload

    // If email is being changed, check if the new email is already taken
    if (email) {
      const emailCheck = await User.findOne({ email, _id: { $ne: studentId } });
      if (emailCheck) {
        return res.status(400).json({ message: 'Email address is already in use by another account.' });
      }
    }

    // Update only the provided fields
    const updatedUser = await User.findByIdAndUpdate(
      studentId,
      { $set: { name, email } },
      { returnDocument: 'after', runValidators: true }   // new: true
    ).select('-password');

    res.json({ 
      success: true, 
      message: 'Profile updated successfully.', 
      user: { name: updatedUser.name, email: updatedUser.email } 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // 1. Locate the account entry
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User with this email does not exist.' });
    }

    // 2. Hash the raw incoming replacement password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // 3. Persist modifications back onto document record instance
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully! You can now login.' });
  } catch (err) {
    res.status(500).json({ error: 'Database exception occurred during password reset execution.' });
  }
};