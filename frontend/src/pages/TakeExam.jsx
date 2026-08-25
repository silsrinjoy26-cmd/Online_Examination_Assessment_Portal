import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TakeExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/exams/${examId}`, { headers: { Authorization: `Bearer ${token}` }})
      .then(res => {
        setExam(res.data);
        setTimeLeft(res.data.duration * 60); // Convert minutes to total seconds
      }).catch(err => console.error(err));
  }, [examId]);

  const handleSubmit = useCallback(async () => {
    try {
      await axios.post(`http://localhost:5000/api/exams/submit/${examId}`, { answers }, { headers: { Authorization: `Bearer ${token}` }});
      alert('Examination execution completed. Your automated grade sheet has been sent to your email.');
      navigate('/student-dashboard');
    } catch (error) { console.error('Submission processing failure:', error); }
  }, [examId, answers, navigate, token]);

  useEffect(() => {
    if (timeLeft === 0 && exam) {
      handleSubmit(); // Auto-submit when time reaches zero
      return;
    }
    const internalTimer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(internalTimer);
  }, [timeLeft, exam, handleSubmit]);

  const handleOptionSelect = (questionId, optionIndex) => {
    const freshAnswers = [...answers];
    const matchIndex = freshAnswers.findIndex(ans => ans.questionId === questionId);
    if (matchIndex > -1) {
      freshAnswers[matchIndex].selectedOption = optionIndex;
    } else {
      freshAnswers.push({ questionId, selectedOption: optionIndex });
    }
    setAnswers(freshAnswers);
  };

  if (!exam) return <div style={{ padding: '40px', textAlign: 'center' }}>Connecting secure assessment environment terminal...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgb(0 0 0 / 0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f1f5f9', paddingBottom: '20px' }}>
        <h2>{exam.title}</h2>
        <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', fontSize: '18px' }}>
          Time Remaining: {Math.floor(timeLeft / 60)}m {timeLeft % 60}s
        </div>
      </div>

      {exam.questions.map((q, idx) => (
        <div key={q._id} style={{ margin: '30px 0', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9' }}>
          <h4>Question {idx + 1}: {q.questionText}</h4>
          {q.options.map((option, optIdx) => (
            <label key={optIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' }}>
              <input type="radio" name={q._id} onChange={() => handleOptionSelect(q._id, optIdx)} style={{ width: 'auto', margin: '0' }} />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} style={{ background: '#10b981', width: '100%', padding: '15px', fontSize: '16px', marginTop: '20px' }}>
        Submit Examination Window
      </button>
    </div>
  );
};

export default TakeExam;