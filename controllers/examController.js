const Exam = require('../models/Exam');
const Submission = require('../models/Submission');
const transporter = require('../utils/emailService');

exports.createExam = async (req, res) => {
  try {
    const exam = new Exam({ ...req.body, createdBy: req.user.id });
    await exam.save();
    res.status(201).json({ message: 'Examination provisioned successfully.', exam });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExamsList = async (req, res) => {
  try {
    const exams = await Exam.find().select('-questions.correctOption');
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Requested exam could not be located." });
    
    if (req.user.role === 'student') {
      exam.questions.forEach(q => q.correctOption = undefined); // Protect answer keys
    }
    res.json(exam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    const studentAnswers = req.body.answers; // Expects array: [{ questionId, selectedOption }]
    let score = 0, totalMarks = 0;

    exam.questions.forEach((q) => {
      totalMarks += q.marks;
      const response = studentAnswers.find(ans => ans.questionId === q._id.toString());
      if (response && response.selectedOption === q.correctOption) {
        score += q.marks;
      }
    });

    const submission = new Submission({ 
      examId: exam._id, 
      studentId: req.user.id, 
      answers: studentAnswers, 
      score, 
      totalMarks 
    });
    await submission.save();

    // Automated Transactional Email Notification
    const reportHtml = `
      <div style="font-family: Arial, sans-serif; padding: 30px; border: 2px solid #34495E; border-radius: 8px; max-width: 600px;">
        <h2 style="color: #2C3E50; border-bottom: 2px solid #ECF0F1; padding-bottom: 10px;">Official Academic Grade Transcript</h2>
        <p>Dear <strong>${req.user.name}</strong>,</p>
        <p>This document verifies that your online testing window for <strong>${exam.title}</strong> has closed.</p>
        <div style="background: #F8F9F9; padding: 20px; border-radius: 4px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Final Evaluation Score:</strong> <span style="font-size: 18px; color: #27AE60;">${score} / ${totalMarks}</span></p>
          <p style="margin: 5px 0;"><strong>Calculated Percentage:</strong> ${((score / totalMarks) * 100).toFixed(2)}%</p>
        </div>
        <p style="font-size: 11px; color: #7F8C8D;">This is a system-generated notice. Replies to this email route are unmonitored.</p>
      </div>`;

    await transporter.sendMail({
      from: process.env.SYSTEM_EMAIL,
      to: req.user.email,
      subject: `[Graded Profile Released] Results for ${exam.title}`,
      html: reportHtml
    });

    res.json({ message: "Exam evaluation saved. Automated grade report dispatched.", score, totalMarks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};