// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('students');
//   const [students, setStudents] = useState([]);
//   const [lectureForm, setLectureForm] = useState({ title: '', description: '', videoUrl: '' });
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (activeTab === 'students') {
//       axios.get('http://localhost:5000/api/students', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setStudents(res.data))
//         .catch(err => console.error(err));
//     }
//   }, [activeTab]);

//   const handleLectureSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/tutorials', lectureForm, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Lecture published successfully!');
//       setLectureForm({ title: '', description: '', videoUrl: '' });
//     } catch (err) { alert('Failed to publish lecture.'); }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '20px' }}>
//         <h3>Admin Console</h3>
//         <p style={{ fontSize: '13px', color: '#94a3b8' }}>Welcome, Host Owner</p>
//         <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
//         <button onClick={() => setActiveTab('students')} style={sidebarBtn(activeTab === 'students')}>Students Registry</button>
//         <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>Upload Lectures</button>
//         <button onClick={handleLogout} style={{ ...sidebarBtn(false), color: '#ef4444', marginTop: '40px' }}>Log Out</button>
//       </div>

//       {/* Main Panel Content */}
//       <div style={{ flex: 1, padding: '40px' }}>
//         {activeTab === 'students' && (
//           <div>
//             <h2>Registered Student Directory</h2>
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
//                   <th style={{ padding: '15px' }}>Name</th>
//                   <th style={{ padding: '15px' }}>Email Address</th>
//                   <th style={{ padding: '15px' }}>Joined Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map(s => (
//                   <tr key={s._id} style={{ borderBottom: '1px solid #e2e8f0' }}>
//                     <td style={{ padding: '15px' }}>{s.name}</td>
//                     <td style={{ padding: '15px' }}>{s.email}</td>
//                     <td style={{ padding: '15px' }}>{new Date(s.createdAt).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Archive New Lecture Tutorial</h2>
//             <form onSubmit={handleLectureSubmit}>
//               <label>Lecture Title</label>
//               <input type="text" value={lectureForm.title} required onChange={e => setLectureForm({...lectureForm, title: e.target.value})} />
              
//               <label>Description Note</label>
//               <textarea rows="3" value={lectureForm.description} onChange={e => setLectureForm({...lectureForm, description: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px' }}></textarea>
              
//               <label>Video Stream Resource Link (URL)</label>
//               <input type="url" placeholder="https://youtube.com/..." value={lectureForm.videoUrl} required onChange={e => setLectureForm({...lectureForm, videoUrl: e.target.value})} />
              
//               <button type="submit" style={{ background: '#10b981', marginTop: '15px' }}>Publish to Platform</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const sidebarBtn = (isActive) => ({
//   display: 'block', width: '100%', padding: '12px', margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#cbd5e1',
//   border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: '600'
// });

// export default AdminDashboard;
//2 
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('students');
//   const [students, setStudents] = useState([]);
//   const [lectureForm, setLectureForm] = useState({ title: '', description: '', videoUrl: '' });
  
//   // INJECTED STATE: Handle the Admin Exam Builder inputs
//   const [examForm, setExamForm] = useState({ title: '', duration: '', questions: [] });
  
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const adminName = localStorage.getItem('name') || 'Administrator';

//   useEffect(() => {
//     if (activeTab === 'students') {
//       axios.get('http://localhost:5000/api/students', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setStudents(res.data))
//         .catch(err => console.error(err));
//     }
//   }, [activeTab, students.length]);

//   const handleLectureSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/tutorials', lectureForm, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Lecture published successfully!');
//       setLectureForm({ title: '', description: '', videoUrl: '' });
//     } catch (err) { alert('Failed to publish lecture.'); }
//   };

//   const handleRemoveStudent = async (studentId) => {
//   if (!window.confirm("Are you absolutely sure you want to permanently remove this student from the database?")) return;
  
//   try {
//     await axios.delete(`http://localhost:5000/api/students/:${studentId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     alert('Student successfully dropped from database.');
//     // Refresh local UI state array instantly
//     setStudents(students.filter(s => s._id !== studentId));
//   } catch (err) {
//     alert('Failed to remove student. Verify server routing permissions.');
//   }
// };

//   // INJECTED FUNCTION: Submit Handler for deploying exams to database
//   const handleExamSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/exams', examForm, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Examination published successfully!');
//       setExamForm({ title: '', duration: '', questions: [] });
//     } catch (err) { alert('Failed to deploy examination.'); }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '20px' }}>
//         <h3>Admin Console</h3>
//         <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '500' }}>Welcome, {adminName}</p>
//         <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
//         <button onClick={() => setActiveTab('students')} style={sidebarBtn(activeTab === 'students')}>Students Registry</button>
//         <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>Upload Lectures</button>
        
//         {/* INJECTED BUTTON: New sidebar tab selection */}
//         <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>Create Examination</button>
        
//         <button onClick={handleLogout} style={{ ...sidebarBtn(false), color: '#ef4444', marginTop: '40px' }}>Log Out</button>
//       </div>

//       {/* Main Panel Content */}
//       <div style={{ flex: 1, padding: '40px' }}>
//         {activeTab === 'students' && (
//           <div>
//             <h2>Registered Student Directory</h2>
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
//                   <th style={{ padding: '15px' }}>Name</th>
//                   <th style={{ padding: '15px' }}>Email Address</th>
//                   <th style={{ padding: '15px' }}>Joined Date</th>
//                   <th style={{ padding: '15px' }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map(s => (
//                   <tr key={s._id} style={{ borderBottom: '1px solid #e2e8f0' }}>
//                     <td style={{ padding: '15px' }}>{s.name}</td>
//                     <td style={{ padding: '15px' }}>{s.email}</td>
//                     <td style={{ padding: '15px' }}>{new Date(s.createdAt).toLocaleDateString()}</td>
//                     <td style={{ padding: '15px' }}>
//               <button 
//                 onClick={() => handleRemoveStudent(s._id)} 
//                 style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
//               >
//                 Remove Student
//               </button>
//             </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Archive New Lecture Tutorial</h2>
//             <form onSubmit={handleLectureSubmit}>
//               <label>Lecture Title</label>
//               <input type="text" value={lectureForm.title} required onChange={e => setLectureForm({...lectureForm, title: e.target.value})} />
              
//               <label>Description Note</label>
//               <textarea rows="3" value={lectureForm.description} onChange={e => setLectureForm({...lectureForm, description: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px' }}></textarea>
              
//               <label>Video Stream Resource Link (URL)</label>
//               <input type="url" placeholder="https://youtube.com/..." value={lectureForm.videoUrl} required onChange={e => setLectureForm({...lectureForm, videoUrl: e.target.value})} />
              
//               <button type="submit" style={{ background: '#10b981', marginTop: '15px' }}>Publish to Platform</button>
//             </form>
//           </div>
//         )}

//         {/* INJECTED WORKSPACE PANEL: Displays the form view when the new tab is active */}
//         {activeTab === 'exams' && (
//   <div style={{ maxWidth: '700px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//     <h2>Create & Deploy Examination</h2>
//     <form onSubmit={handleExamSubmit}>
//       <label style={{ fontWeight: '600', display: 'block', marginTop: '15px' }}>Examination Title</label>
//       <input 
//         type="text" 
//         placeholder="e.g., Java Core Concept Evaluation" 
//         value={examForm.title} 
//         required 
//         onChange={e => setExamForm({...examForm, title: e.target.value})} 
//         style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '10px' }}
//       />
      
//       <label style={{ fontWeight: '600', display: 'block', marginTop: '15px' }}>Duration Limit (Minutes)</label>
//       <input 
//         type="number" 
//         placeholder="e.g., 45" 
//         value={examForm.duration} 
//         required 
//         onChange={e => setExamForm({...examForm, duration: e.target.value})} 
//         style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '20px' }}
//       />
      
//       {/* --- DYNAMIC QUESTION GENERATION MATRIX --- */}
//       <div style={{ background: '#f8fafc', padding: '20px', border: '1px dashed #cbd5e1', borderRadius: '6px', margin: '15px 0' }}>
//         <h4 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Question Generation Matrix</h4>
        
//         {/* Render List of Added Questions */}
//         {examForm.questions.map((q, qIndex) => (
//           <div key={qIndex} style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #e2e8f0' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <strong>Question {qIndex + 1}</strong>
//               <button 
//                 type="button" 
//                 onClick={() => {
//                   const updatedQuestions = examForm.questions.filter((_, i) => i !== qIndex);
//                   setExamForm({ ...examForm, questions: updatedQuestions });
//                 }}
//                 style={{ background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
//               >
//                 Remove
//               </button>
//             </div>
            
//             <input 
//               type="text" 
//               placeholder="Enter the question text" 
//               value={q.questionText} 
//               required
//               onChange={e => {
//                 const updated = [...examForm.questions];
//                 updated[qIndex].questionText = e.target.value;
//                 setExamForm({ ...examForm, questions: updated });
//               }}
//               style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #cbd5e1' }}
//             />

//             {/* Options Grid */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '5px' }}>
//               {q.options.map((opt, oIndex) => (
//                 <input 
//                   key={oIndex}
//                   type="text" 
//                   placeholder={`Option ${String.fromCharCode(65 + oIndex)}`} 
//                   value={opt} 
//                   required
//                   onChange={e => {
//                     const updated = [...examForm.questions];
//                     updated[qIndex].options[oIndex] = e.target.value;
//                     setExamForm({ ...examForm, questions: updated });
//                   }}
//                   style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
//                 />
//               ))}
//             </div>

//             {/* Correct Answer Identifier */}
//             <div style={{ marginTop: '10px' }}>
//               <label style={{ fontSize: '13px', marginRight: '10px', fontWeight: '500' }}>Correct Answer Index:</label>
//               <select 
//                 value={q.correctAnswer}
//                 onChange={e => {
//                   const updated = [...examForm.questions];
//                   updated[qIndex].correctAnswer = parseInt(e.target.value);
//                   setExamForm({ ...examForm, questions: updated });
//                 }}
//                 style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
//               >
//                 <option value={0}>Option A</option>
//                 <option value={1}>Option B</option>
//                 <option value={2}>Option C</option>
//                 <option value={3}>Option D</option>
//               </select>
//             </div>
//           </div>
//         ))}

//         {/* Add New Question Blueprint Button */}
//         <button 
//           type="button" 
//           onClick={() => {
//             setExamForm({
//               ...examForm,
//               questions: [...examForm.questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]
//             });
//           }}
//           style={{ background: '#475569', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%' }}
//         >
//           + Add Question to Exam
//         </button>
//       </div>

//       <button type="submit" style={{ background: '#0284c7', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%', marginTop: '10px' }}>
//         Publish Live to Students
//       </button>
//     </form>
//   </div>
// )}
//       </div>
//     </div>
//   );
// };

// const sidebarBtn = (isActive) => ({
//   display: 'block', width: '100%', padding: '12px', margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#cbd5e1',
//   border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: '600'
// });

// export default AdminDashboard;
//3
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('students');
//   const [students, setStudents] = useState([]);
//   const [lectureForm, setLectureForm] = useState({ title: '', description: '', videoUrl: '' });
  
//   // INJECTED STATE: Handle the Admin Exam Builder inputs
//   const [examForm, setExamForm] = useState({ title: '', duration: '', questions: [] });
  
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const adminName = localStorage.getItem('name') || 'Administrator';

//   useEffect(() => {
//     if (activeTab === 'students') {
//       axios.get('http://localhost:5000/api/students', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setStudents(res.data))
//         .catch(err => console.error(err));
//     } else if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data))
//         .catch(err => console.error(err));
//     }
//   }, [activeTab, students.length]);

//   const handleLectureSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/tutorials', lectureForm, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Lecture published successfully!');
//       setLectureForm({ title: '', description: '', videoUrl: '' });
//     } catch (err) { alert('Failed to publish lecture.'); }
//   };

//   const handleRemoveStudent = async (studentId) => {
//     if (!window.confirm("Are you absolutely sure you want to permanently remove this student from the database?")) return;
    
//     try {
//       // FIXED ENDPOINT: Correctly targets /api/students/:id to eliminate the 404 router response error
//       await axios.delete(`http://localhost:5000/api/students/${studentId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Student successfully dropped from database.');
//       // Refresh local UI state array instantly
//       setStudents(students.filter(s => s._id !== studentId));
//     } catch (err) {
//       alert('Failed to remove student. Verify server routing permissions.');
//     }
//   };

//   // INJECTED FUNCTION: Submit Handler for deploying exams to database
//   // const handleExamSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post('http://localhost:5000/api/exams', examForm, { headers: { Authorization: `Bearer ${token}` }});
//   //     alert('Examination published successfully!');
//   //     setExamForm({ title: '', duration: '', questions: [] });
//   //   } catch (err) { alert('Failed to deploy examination.'); }
//   // };
//   const handleExamSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Format questions array to perfectly match backend Mongoose schema expectations
//       const formattedQuestions = examForm.questions.map(q => ({
//         questionText: q.questionText,
//         options: q.options,
//         correctOption: q.correctAnswer, // Maps frontend 'correctAnswer' to backend 'correctOption'
//         marks: 1 // Matches schema default value
//       }));

//       const payload = {
//         title: examForm.title,
//         duration: examForm.duration,
//         questions: formattedQuestions
//       };

//       await axios.post('http://localhost:5000/api/exams', payload, { 
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       alert('Examination published successfully!');
//       setExamForm({ title: '', duration: '', questions: [] });
//     } catch (err) { 
//       console.error("Exam Deployment Error Details:", err.response?.data || err.message);
//       alert('Failed to deploy examination.'); 
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '20px' }}>
//         <h3>Admin Console</h3>
//         <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '500' }}>Welcome, {adminName}</p>
//         <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
//         <button onClick={() => setActiveTab('students')} style={sidebarBtn(activeTab === 'students')}>Students Registry</button>
//         <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>Upload Lectures</button>
        
//         {/* INJECTED BUTTON: New sidebar tab selection */}
//         <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>Create Examination</button>
        
//         <button onClick={handleLogout} style={{ ...sidebarBtn(false), color: '#ef4444', marginTop: '40px' }}>Log Out</button>
//       </div>

//       {/* Main Panel Content */}
//       <div style={{ flex: 1, padding: '40px' }}>
//         {activeTab === 'students' && (
//           <div>
//             <h2>Registered Student Directory</h2>
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
//                   <th style={{ padding: '15px' }}>Name</th>
//                   <th style={{ padding: '15px' }}>Email Address</th>
//                   <th style={{ padding: '15px' }}>Joined Date</th>
//                   <th style={{ padding: '15px' }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map(s => (
//                   <tr key={s._id} style={{ borderBottom: '1px solid #e2e8f0' }}>
//                     <td style={{ padding: '15px' }}>{s.name}</td>
//                     <td style={{ padding: '15px' }}>{s.email}</td>
//                     <td style={{ padding: '15px' }}>{new Date(s.createdAt).toLocaleDateString()}</td>
//                     <td style={{ padding: '15px' }}>
//                       <button 
//                         onClick={() => handleRemoveStudent(s._id)} 
//                         style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
//                       >
//                         Remove Student
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Upload New Lecture Tutorial</h2>
//             <form onSubmit={handleLectureSubmit}>
//               <label>Lecture Title</label>
//               <input type="text" value={lectureForm.title} required onChange={e => setLectureForm({...lectureForm, title: e.target.value})} />
              
//               <label>Description Note</label>
//               <textarea rows="3" value={lectureForm.description} onChange={e => setLectureForm({...lectureForm, description: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px' }}></textarea>
              
//               <label>Video Stream Resource Link (URL)</label>
//               <input type="url" placeholder="https://youtube.com/..." value={lectureForm.videoUrl} required onChange={e => setLectureForm({...lectureForm, videoUrl: e.target.value})} />
              
//               <button type="submit" style={{ background: '#10b981', marginTop: '15px' }}>Publish to Platform</button>
//             </form>
//           </div>
//         )}
      
//         {/* INJECTED WORKSPACE PANEL: Displays the form view when the new tab is active */}
//         {activeTab === 'exams' && (
//           <div style={{ maxWidth: '700px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Create & Deploy Examination</h2>
//             <form onSubmit={handleExamSubmit}>
//               <label style={{ fontWeight: '600', display: 'block', marginTop: '15px' }}>Examination Title</label>
//               <input 
//                 type="text" 
//                 placeholder="e.g., Java Core Concept Evaluation" 
//                 value={examForm.title} 
//                 required 
//                 onChange={e => setExamForm({...examForm, title: e.target.value})} 
//                 style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '10px' }}
//               />
              
//               <label style={{ fontWeight: '600', display: 'block', marginTop: '15px' }}>Duration Limit (Minutes)</label>
//               <input 
//                 type="number" 
//                 placeholder="e.g., 45" 
//                 value={examForm.duration} 
//                 required 
//                 onChange={e => setExamForm({...examForm, duration: e.target.value})} 
//                 style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '20px' }}
//               />
              
//               {/* --- DYNAMIC QUESTION GENERATION MATRIX --- */}
//               <div style={{ background: '#f8fafc', padding: '20px', border: '1px dashed #cbd5e1', borderRadius: '6px', margin: '15px 0' }}>
//                 <h4 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Question Generation Matrix</h4>
                
//                 {/* Render List of Added Questions */}
//                 {examForm.questions.map((q, qIndex) => (
//                   <div key={qIndex} style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #e2e8f0' }}>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <strong>Question {qIndex + 1}</strong>
//                       <button 
//                         type="button" 
//                         onClick={() => {
//                           const updatedQuestions = examForm.questions.filter((_, i) => i !== qIndex);
//                           setExamForm({ ...examForm, questions: updatedQuestions });
//                         }}
//                         style={{ background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
//                       >
//                         Remove
//                       </button>
//                     </div>
                    
//                     <input 
//                       type="text" 
//                       placeholder="Enter the question text" 
//                       value={q.questionText} 
//                       required
//                       onChange={e => {
//                         const updated = [...examForm.questions];
//                         updated[qIndex].questionText = e.target.value;
//                         setExamForm({ ...examForm, questions: updated });
//                       }}
//                       style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #cbd5e1' }}
//                     />

//                     {/* Options Grid */}
//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '5px' }}>
//                       {q.options.map((opt, oIndex) => (
//                         <input 
//                           key={oIndex}
//                           type="text" 
//                           placeholder={`Option ${String.fromCharCode(65 + oIndex)}`} 
//                           value={opt} 
//                           required
//                           onChange={e => {
//                             const updated = [...examForm.questions];
//                             updated[qIndex].options[oIndex] = e.target.value;
//                             setExamForm({ ...examForm, questions: updated });
//                           }}
//                           style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
//                         />
//                       ))}
//                     </div>

//                     {/* Correct Answer Identifier */}
//                     <div style={{ marginTop: '10px' }}>
//                       <label style={{ fontSize: '13px', marginRight: '10px', fontWeight: '500' }}>Correct Answer Index:</label>
//                       <select 
//                         value={q.correctAnswer}
//                         onChange={e => {
//                           const updated = [...examForm.questions];
//                           updated[qIndex].correctAnswer = parseInt(e.target.value);
//                           setExamForm({ ...examForm, questions: updated });
//                         }}
//                         style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
//                       >
//                         <option value={0}>Option A</option>
//                         <option value={1}>Option B</option>
//                         <option value={2}>Option C</option>
//                         <option value={3}>Option D</option>
//                       </select>
//                     </div>
//                   </div>
//                 ))}

//                 {/* Add New Question Blueprint Button */}
//                 <button 
//                   type="button" 
//                   onClick={() => {
//                     setExamForm({
//                       ...examForm,
//                       questions: [...examForm.questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]
//                     });
//                   }}
//                   style={{ background: '#475569', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%' }}
//                 >
//                   + Add Question to Exam
//                 </button>
//               </div>

//               <button type="submit" style={{ background: '#0284c7', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%', marginTop: '10px' }}>
//                 Publish Live to Students
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const sidebarBtn = (isActive) => ({
//   display: 'block', width: '100%', padding: '12px', margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#cbd5e1',
//   border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: '600'
// });

// export default AdminDashboard;
//4
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'react-serif';
import axios from 'axios';

const AdminDashboard = () => {
  // 🛠️ CHANGED: Set 'dashboard' as the default view tab
  const [activeTab, setActiveTab] = useState('dashboard');
  const [students, setStudents] = useState([]);
  const [lectureForm, setLectureForm] = useState({ title: '', description: '', videoUrl: '' });
  
  // INJECTED STATE: Handle the Admin Exam Builder inputs
  const [examForm, setExamForm] = useState({ title: '', duration: '', questions: [] });
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const adminName = localStorage.getItem('username') || 'Administrator';

  useEffect(() => {
    // Fetch students dynamically if on the dashboard overview or student registry tab
    if (activeTab === 'students' || activeTab === 'dashboard') {
      axios.get('http://localhost:5000/api/students', { headers: { Authorization: `Bearer ${token}` }})
        .then(res => setStudents(res.data))
        .catch(err => console.error(err));
    }
  }, [activeTab, students.length]);

  const handleLectureSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tutorials', lectureForm, { headers: { Authorization: `Bearer ${token}` }});
      alert('Lecture published successfully!');
      setLectureForm({ title: '', description: '', videoUrl: '' });
    } catch (err) { alert('Failed to publish lecture.'); }
  };

  const handleRemoveStudent = async (studentId) => {
    if (!window.confirm("Are you absolutely sure you want to permanently remove this student from the database?")) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/students/${studentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Student successfully dropped from database.');
      setStudents(students.filter(s => s._id !== studentId));
    } catch (err) {
      alert('Failed to remove student. Verify server routing permissions.');
    }
  };

  const handleExamSubmit = async (e) => {
    e.preventDefault();

    // 🛠️ FIX CODE INJECTION: Check for an empty question array matrix
    if (!examForm.questions || examForm.questions.length === 0) {
      alert('Failed to deploy examination: You must add at least one question to the generation matrix before publishing.');
      return;
    }

    try {
      const formattedQuestions = examForm.questions.map(q => ({
        questionText: q.questionText,
        options: q.options,
        correctOption: q.correctAnswer, 
        marks: 1 
      }));

      const payload = {
        title: examForm.title,
        duration: examForm.duration,
        questions: formattedQuestions
      };

      await axios.post('http://localhost:5000/api/exams', payload, { 
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert('Examination published successfully!');
      setExamForm({ title: '', duration: '', questions: [] });
    } catch (err) { 
      console.error("Exam Deployment Error Details:", err.response?.data || err.message);
      alert('Failed to deploy examination. Verify database validation checks.'); 
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
      {/* Sidebar navigation panel */}
      <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '32px', paddingLeft: '8px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: '0 0 4px 0', letterSpacing: '0.5px' }}>Admin Console</h3>
          <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '500', margin: 0 }}>Active Session: {adminName}</p>
        </div>
        
        <hr style={{ borderColor: '#f7fb1f', margin: '0 0 20px 0', width: '100%' }} /> <></>
        
        <nav style={{ flex: 1 }}>
          {/* 🛠️ ADDED: Professional Sidebar Nav Item for Dashboard Home */}
          <button onClick={() => setActiveTab('dashboard')} style={sidebarBtn(activeTab === 'dashboard')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
            Dashboard Home
          </button>

          <button onClick={() => setActiveTab('students')} style={sidebarBtn(activeTab === 'students')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Students Registry
          </button>
          
          <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            Upload Lectures
          </button>
          
          <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            Create Examination
          </button>
        </nav>
        
        <button onClick={handleLogout} style={{ ...sidebarBtn(false), color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', textAlign: 'center', justifyContent: 'center', marginTop: 'auto' }}>
          Log Out
        </button>
      </div>

      {/* Main Panel Content */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
        {/* 🛠️ ADDED: NEW PROFESSIONAL MAIN DASHBOARD TAB VIEW */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Greeting Banner */}
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 8px 0' }}>
                Welcome back, {adminName}!
              </h1>
              <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>
                System management oversight control panel. Monitor database activities, schedule evaluations, and review updates below.
              </p>
            </div>

            {/* Quick Analytics Summary Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <div style={metricCardStyle}>
                <div>
                  <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0', letterSpacing: '0.025em' }}>Registered Students</h4>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>{students.length}</h2>
                </div>
                <div style={{ color: '#2563eb', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                </div>
              </div>

              <div style={metricCardStyle}>
                <div>
                  <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0', letterSpacing: '0.025em' }}>Server Environment</h4>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#16a34a', margin: '6px 0 0 0' }}>Online / Active</h2>
                </div>
                <div style={{ color: '#16a34a', backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
              </div>

              <div style={metricCardStyle}>
                <div>
                  <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0', letterSpacing: '0.025em' }}>Security Handshake</h4>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: '6px 0 0 0' }}>HMAC-SHA256</h2>
                </div>
                <div style={{ color: '#ca8a04', backgroundColor: '#fefce8', padding: '10px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
              </div>
            </div>

            {/* Platform Core Workspaces Direct Router Navigation Links */}
            <div style={{ backgroundColor: 'white', padding: '28px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '20px', marginTop: 0 }}>System Management Access Links</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div onClick={() => setActiveTab('exams')} style={shortcutCardStyle}>
                  <h4 style={{ margin: '0 0 6px 0', color: '#0284c7' }}>Deploy New Exam Matrix &rarr;</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Configure system questions, parameters, and time metrics instantly.</p>
                </div>
                <div onClick={() => setActiveTab('lectures')} style={shortcutCardStyle}>
                  <h4 style={{ margin: '0 0 6px 0', color: '#10b981' }}>Upload Reference Track &rarr;</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Broadcast external stream resources directly to public learner timelines.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: REGISTERED STUDENTS DIRECTORY */}
        {activeTab === 'students' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Registered Student Directory</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
                  <th style={{ padding: '15px' }}>Name</th>
                  <th style={{ padding: '15px' }}>Email Address</th>
                  <th style={{ padding: '15px' }}>Joined Date</th>
                  <th style={{ padding: '15px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s => (
                  <tr key={s._id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '15px', color: '#334155', fontWeight: '500' }}>{s.name}</td>
                    <td style={{ padding: '15px', color: '#475569' }}>{s.email}</td>
                    <td style={{ padding: '15px', color: '#64748b' }}>{new Date(s.createdAt).toLocaleDateString()}</td>
                    <td style={{ padding: '15px' }}>
                      <button 
                        onClick={() => handleRemoveStudent(s._id)} 
                        style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
                      >
                        Remove Student
                      </button>
                    </td>
                  </tr>
                ))}
                {students.length === 0 && (
                  <tr>
                    <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No students registered in the system yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: UPLOAD LECTURES */}
        {activeTab === 'lectures' && (
          <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Upload New Lecture Tutorial</h2>
            <form onSubmit={handleLectureSubmit}>
              <label style={labelStyle}>Lecture Title</label>
              <input type="text" value={lectureForm.title} required onChange={e => setLectureForm({...lectureForm, title: e.target.value})} style={inputStyle} />
              
              <label style={labelStyle}>Description Note</label>
              <textarea rows="3" value={lectureForm.description} onChange={e => setLectureForm({...lectureForm, description: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px', outline: 'none' }}></textarea>
              
              <label style={labelStyle}>Video Stream Resource Link (URL)</label>
              <input type="url" placeholder="https://youtube.com/..." value={lectureForm.videoUrl} required onChange={e => setLectureForm({...lectureForm, videoUrl: e.target.value})} style={inputStyle} />
              
              <button type="submit" style={{ background: '#10b981', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%', marginTop: '20px' }}>
                Publish to Platform
              </button>
            </form>
          </div>
        )}
      
        {/* TAB 3: CREATE & DEPLOY EXAMINATION */}
        {activeTab === 'exams' && (
          <div style={{ maxWidth: '700px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Create & Deploy Examination</h2>
            <form onSubmit={handleExamSubmit}>
              <label style={{ fontWeight: '600', display: 'block', marginTop: '15px', color: '#334155' }}>Examination Title</label>
              <input 
                type="text" 
                placeholder="e.g., Java Core Concept Evaluation" 
                value={examForm.title} 
                required 
                onChange={e => setExamForm({...examForm, title: e.target.value})} 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '10px', outline: 'none' }}
              />
              
              <label style={{ fontWeight: '600', display: 'block', marginTop: '15px', color: '#334155' }}>Duration Limit (Minutes)</label>
              <input 
                type="number" 
                placeholder="e.g., 45" 
                value={examForm.duration} 
                required 
                onChange={e => setExamForm({...examForm, duration: e.target.value})} 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '20px', outline: 'none' }}
              />
              
              {/* --- DYNAMIC QUESTION GENERATION MATRIX --- */}
              <div style={{ background: '#f8fafc', padding: '20px', border: '1px dashed #cbd5e1', borderRadius: '6px', margin: '15px 0' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Question Generation Matrix</h4>
                
                {examForm.questions.map((q, qIndex) => (
                  <div key={qIndex} style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: '#334155' }}>Question {qIndex + 1}</strong>
                      <button 
                        type="button" 
                        onClick={() => {
                          const updatedQuestions = examForm.questions.filter((_, i) => i !== qIndex);
                          setExamForm({ ...examForm, questions: updatedQuestions });
                        }}
                        style={{ background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                      >
                        Remove
                      </button>
                    </div>
                    
                    <input 
                      type="text" 
                      placeholder="Enter the question text" 
                      value={q.questionText} 
                      required
                      onChange={e => {
                        const updated = [...examForm.questions];
                        updated[qIndex].questionText = e.target.value;
                        setExamForm({ ...examForm, questions: updated });
                      }}
                      style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '5px' }}>
                      {q.options.map((opt, oIndex) => (
                        <input 
                          key={oIndex}
                          type="text" 
                          placeholder={`Option ${String.fromCharCode(65 + oIndex)}`} 
                          value={opt} 
                          required
                          onChange={e => {
                            const updated = [...examForm.questions];
                            updated[qIndex].options[oIndex] = e.target.value;
                            setExamForm({ ...examForm, questions: updated });
                          }}
                          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }}
                        />
                      ))}
                    </div>

                    <div style={{ marginTop: '10px' }}>
                      <label style={{ fontSize: '13px', marginRight: '10px', fontWeight: '500', color: '#475569' }}>Correct Answer Index:</label>
                      <select 
                        value={q.correctAnswer}
                        onChange={e => {
                          const updated = [...examForm.questions];
                          updated[qIndex].correctAnswer = parseInt(e.target.value);
                          setExamForm({ ...examForm, questions: updated });
                        }}
                        style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: '#fff', outline: 'none', appearance: 'menulist'}}
                      >
                        <option value={0}>Option A</option>
                        <option value={1}>Option B</option>
                        <option value={2}>Option C</option>
                        <option value={3}>Option D</option>
                      </select>
                    </div>
                  </div>
                ))}

                <button 
                  type="button" 
                  onClick={() => {
                    setExamForm({
                      ...examForm,
                      questions: [...examForm.questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]
                    });
                  }}
                  style={{ background: '#475569', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%' }}
                >
                  + Add Question to Exam
                </button>
              </div>

              <button type="submit" style={{ background: '#0284c7', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', width: '100%', marginTop: '10px' }}>
                Publish Live to Students
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const sidebarBtn = (isActive) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%', 
  padding: '12px 16px', 
  margin: '4px 0',
  backgroundColor: isActive ? '#1e293b' : 'transparent',
  color: isActive ? '#38bdf8' : '#94a3b8',
  border: 'none', 
  borderRadius: '6px', 
  cursor: 'pointer', 
  textAlign: 'left', 
  fontWeight: '600',
  fontSize: '0.95rem',
  transition: 'all 0.15s ease',
  outline: 'none'
});

const metricCardStyle = {
  backgroundColor: 'white',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const shortcutCardStyle = {
  border: '1px solid #e2e8f0', 
  padding: '16px', 
  borderRadius: '8px', 
  cursor: 'pointer', 
  transition: 'background-color 0.2s',
  backgroundColor: '#f8fafc'
};

const labelStyle = {
  display: 'block', 
  margin: '14px 0 6px 0', 
  fontWeight: '600', 
  color: '#334155',
  fontSize: '0.95rem'
};

const inputStyle = {
  width: '100%', 
  padding: '10px', 
  borderRadius: '6px', 
  border: '1px solid #cbd5e1', 
  marginBottom: '4px',
  outline: 'none'
};

export default AdminDashboard;