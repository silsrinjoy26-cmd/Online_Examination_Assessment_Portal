const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{ 
    questionId: { type: mongoose.Schema.Types.ObjectId }, 
    selectedOption: { type: Number } 
  }],
  score: { type: Number, required: true },
  totalMarks: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);