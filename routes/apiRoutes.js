const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const authCtrl = require('../controllers/authController');
const examCtrl = require('../controllers/examController');
const tutorialCtrl = require('../controllers/tutorialController');
const inquiryCtrl = require('../controllers/inquiryController');

// API Route Definitions for Online Examination Portal
router.get('/',(req, res) => {
    res.status(200).send('<a href="http://localhost:5173">Go To Frontend</a>');
});

// Authentication Core Modules
router.post('/auth/register', authCtrl.register);
router.post('/auth/login', authCtrl.login);
router.put('/auth/update-password', authCtrl.updatePassword);
router.get('/students', authMiddleware(['admin']), authCtrl.getStudents);
router.delete('/students/:id', authMiddleware(['admin']), authCtrl.deleteStudent);
router.put('/students/update-profile', authMiddleware(['student']), authCtrl.updateProfile);

// Academic Evaluation Framework
router.post('/exams', authMiddleware(['admin']), examCtrl.createExam);
router.get('/exams', authMiddleware(), examCtrl.getExamsList);
router.get('/exams/:id', authMiddleware(), examCtrl.getExamById);
router.post('/exams/submit/:id', authMiddleware(['student']), examCtrl.submitExam);

// Educational Resources Streaming Subsystem
router.post('/tutorials', authMiddleware(['admin']), tutorialCtrl.uploadTutorial);
router.get('/tutorials', authMiddleware(), tutorialCtrl.getAllTutorials);

// Helpdesk Dispatch Hub
router.post('/inquiry', authMiddleware(), inquiryCtrl.sendInquiry);

module.exports = router;