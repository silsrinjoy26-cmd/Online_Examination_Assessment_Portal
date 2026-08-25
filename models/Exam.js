const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: Number, required: true }, // Index integer (0 to 3)
  marks: { type: Number, default: 1 }
});

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number, required: true }, // Expressed in minutes
  questions: [QuestionSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Exam', ExamSchema);
//2
// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//   questionText: { 
//     type: String, 
//     required: true 
//   },
//   options: [{ 
//     type: String, 
//     required: true 
//   }],
//   correctOption: { 
//     type: String, 
//     required: true 
//   }
// });

// const examSchema = new mongoose.Schema({
//   title: { 
//     type: String, 
//     required: true 
//   },
//   duration: { 
//     type: Number, 
//     required: true 
//   },
//   questions: [questionSchema]
// }, { timestamps: true });

// module.exports = mongoose.model('Exam', examSchema);