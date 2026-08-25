// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const [isSubmitted, setIsSubmitted] = useState(false);
// const [evaluationResults, setEvaluationResults] = useState(null);

// const StudentDashboard = () => {
//   const [activeTab, setActiveTab] = useState('exams');
//   const [exams, setExams] = useState([]);
//   const [tutorials, setTutorials] = useState([]);
//   const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (activeTab === 'exams') {
//       axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setExams(res.data)).catch(err => console.error(err));
//     } else if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data)).catch(err => console.error(err));
//     }
//   }, [activeTab]);

//   const handleInquirySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Your inquiry has been directly routed and sent successfully!');
//       setInquiry({ targetEmail: '', subject: '', message: '' });
//     } catch (err) { alert('Inquiry dispatch failed over server.'); }
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '20px' }}>
//         <h3>Student Portal</h3>
//         <p style={{ fontSize: '13px', color: '#94a3b8' }}>Logged in as: {localStorage.getItem('userName')}</p>
//         <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
//         <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>✍️ Available Exams</button>
//         <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>🎥 Video Tutorials</button>
//         <button onClick={() => setActiveTab('inquiry')} style={sidebarBtn(activeTab === 'inquiry')}>📬 Helpdesk Inquiry</button>
//         <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ ...sidebarBtn(false), color: '#ef4444', marginTop: '40px' }}>Quit Portal</button>
//       </div>

//       {/* Workspace content */}
//       <div style={{ flex: 1, padding: '40px' }}>
//         {activeTab === 'exams' && (
//           <div>
//             <h2>Your Assigned Assessments</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
//               {exams.map(exam => (
//                 <div key={exam._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <h3>{exam.title}</h3>
//                   <p style={{ color: '#64748b' }}>{exam.description || 'No description provided.'}</p>
//                   <p><strong>Duration:</strong> {exam.duration} Minutes</p>
//                   <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#e11d48' }}>Start Assessment Terminal</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div>
//             <h2>Global Class Lecture Tutorials</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginTop: '20px' }}>
//               {tutorials.map(t => (
//                 <div key={t._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
//                   <h3>{t.title}</h3>
//                   <p style={{ color: '#64748b' }}>{t.description}</p>
//                   <a href={t.videoUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>Launch Stream Lecture Terminal →</a>
//                   <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '15px' }}>Uploaded by Host: {t.uploadedBy?.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'inquiry' && (
//           <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Communications Hub: Send Desk Inquiry</h2>
//             <form onSubmit={handleInquirySubmit}>
//               <label>Recipient Office Email Address</label>
//               <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} />
              
//               <label>Subject Title</label>
//               <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} />
              
//               <label>Message Content Data Body</label>
//               <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px' }}></textarea>
              
//               <button type="submit" style={{ marginTop: '15px' }}>Send Outbound Inquiry</button>
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

// export default StudentDashboard;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [activeTab, setActiveTab] = useState('exams');
//   const [exams, setExams] = useState([]);
//   const [tutorials, setTutorials] = useState([]);
//   const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileForm, setProfileForm] = useState({ 
//    name: localStorage.getItem('name') || '', 
//    email: localStorage.getItem('email') || '' 
//   });

//   useEffect(() => {
//     if (activeTab === 'exams') {
//       axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setExams(res.data)).catch(err => console.error(err));
//     } else if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data)).catch(err => console.error(err));
//     }
//   }, [activeTab]);

//   const handleInquirySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Your inquiry has been directly routed and sent successfully!');
//       setInquiry({ targetEmail: '', subject: '', message: '' });
//     } catch (err) { alert('Inquiry dispatch failed over server.'); }
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '20px' }}>
//         <h3>Student Portal</h3>
//         <p style={{ fontSize: '13px', color: '#94a3b8' }}>Logged in as: {localStorage.getItem('userName')}</p>
//         <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
//         <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>✍️ Available Exams</button>
//         <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>🎥 Video Tutorials</button>
//         <button onClick={() => setActiveTab('inquiry')} style={sidebarBtn(activeTab === 'inquiry')}>📬 Helpdesk Inquiry</button>
//         <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ ...sidebarBtn(false), color: '#ef4444', marginTop: '40px' }}>Logout</button>
//       </div>

//       {/* Workspace content */}
//       <div style={{ flex: 1, padding: '40px' }}>
//         {activeTab === 'exams' && (
//           <div>
//             <h2>Your Assigned Assessments</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
//               {exams.map(exam => (
//                 <div key={exam._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <h3>{exam.title}</h3>
//                   <p style={{ color: '#64748b' }}>{exam.description || 'No description provided.'}</p>
//                   <p><strong>Duration:</strong> {exam.duration} Minutes</p>
//                   <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#e11d48', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Start Assessment Terminal</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div>
//             <h2>Class Lecture Tutorials</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginTop: '20px' }}>
//               {tutorials.map(t => (
//                 <div key={t._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
//                   <h3>{t.title}</h3>
//                   <p style={{ color: '#64748b' }}>{t.description}</p>
//                   <a href={t.videoUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>Launch Stream Lecture Terminal →</a>
//                   <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '15px' }}>Uploaded by Host: {t.uploadedBy?.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'inquiry' && (
//           <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Communications Hub: Send Desk Inquiry</h2>
//             <form onSubmit={handleInquirySubmit}>
//               <label>Recipient Office Email Address</label>
//               <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} />
              
//               <label>Subject Title</label>
//               <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} />
              
//               <label>Message Content Data Body</label>
//               <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px' }}></textarea>
              
//               <button type="submit" style={{ marginTop: '15px' }}>Send Outbound Inquiry</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// const handleProfileUpdate = async (e) => {
//   e.preventDefault();
//   const token = localStorage.getItem('token');
  
//   try {
//     const res = await axios.put('http://localhost:5000/api/students/update-profile', profileForm, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
    
//     alert('Profile updated successfully!');
    
//     // Update local storage so the sidebar/welcome message reflects the change immediately
//     localStorage.setItem('name', res.data.user.name);
//     localStorage.setItem('email', res.data.user.email);
    
//     setIsEditing(false);
//     // Optional: If you display their welcome name via a state variable, update it here.
//     window.location.reload(); // Quickest way to sync layout names across the client platform
//   } catch (err) {
//     alert(err.response?.data?.message || 'Failed to update profile records.');
//   }
// };
// return (
//   <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)', marginBottom: '20px' }}>
//   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//     <div>
//       <h3 style={{ margin: 0 }}>My Profile Settings</h3>
//       <p style={{ color: '#64748b', fontSize: '14px', margin: '5px 0 0 0' }}>Fix typos or update your active registration credentials here.</p>
//     </div>
//     {!isEditing && (
//       <button 
//         onClick={() => setIsEditing(true)}
//         style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
//       >
//         Update Credentials
//       </button>
//     )}
//   </div>

//   {isEditing && (
//     <form onSubmit={handleProfileUpdate} style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
//         <div>
//           <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Correct full Name</label>
//           <input 
//             type="text" 
//             value={profileForm.name}
//             required
//             onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
//             style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
//           />
//         </div>
//         <div>
//           <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Correct Email Address</label>
//           <input 
//             type="email" 
//             placeholder="enter new email if changing"
//             value={profileForm.email}
//             required
//             onChange={e => setProfileForm({ ...profileForm, email: e.target.value })}
//             style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
//           />
//         </div>
//       </div>
      
//       <div style={{ display: 'flex', gap: '10px' }}>
//         <button 
//           type="submit" 
//           style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
//         >
//           Save Changes
//         </button>
//         <button 
//           type="button" 
//           onClick={() => setIsEditing(false)}
//           style={{ background: '#94a3b8', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   )}
// </div>
// );

// const sidebarBtn = (isActive) => ({
//   display: 'block', width: '100%', padding: '12px', margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#cbd5e1',
//   border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: '600'
// });

// export default StudentDashboard;
//3
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [activeTab, setActiveTab] = useState('exams');
//   const [exams, setExams] = useState([]);
//   const [tutorials, setTutorials] = useState([]);
//   const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileForm, setProfileForm] = useState({ 
//    name: localStorage.getItem('name') || '', 
//    email: localStorage.getItem('email') || '' 
//   });

//   useEffect(() => {
//     if (activeTab === 'exams') {
//       axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setExams(res.data)).catch(err => console.error(err));
//     } else if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data)).catch(err => console.error(err));
//     }
//   }, [activeTab]);

//   const handleInquirySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Your inquiry has been directly routed and sent successfully!');
//       setInquiry({ targetEmail: '', subject: '', message: '' });
//     } catch (err) { alert('Inquiry dispatch failed over server.'); }
//   };

//   const handleProfileUpdate = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
    
//     try {
//       const res = await axios.put('http://localhost:5000/api/students/update-profile', profileForm, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       alert('Profile updated successfully!');
      
//       // Update local storage so the sidebar/welcome message reflects the change immediately
//       localStorage.setItem('name', res.data.user.name);
//       localStorage.setItem('email', res.data.user.email);
      
//       setIsEditing(false);
//       // Optional: If you display their welcome name via a state variable, update it here.
//       window.location.reload(); // Quickest way to sync layout names across the client platform
//     } catch (err) {
//       alert(err.response?.data?.message || 'Failed to update profile records.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '20px' }}>
//         <h3>Student Portal</h3>
//         <p style={{ fontSize: '13px', color: '#94a3b8' }}>Logged in as: {localStorage.getItem('userName')}</p>
//         <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
//         <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>✍️ Available Exams</button>
//         <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>🎥 Video Tutorials</button>
//         <button onClick={() => setActiveTab('inquiry')} style={sidebarBtn(activeTab === 'inquiry')}>📬 Helpdesk Inquiry</button>
//         <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ ...sidebarBtn(false), color: '#ef4444', marginTop: '40px' }}>Logout</button>
//       </div>

//       {/* Workspace content */}
//       <div style={{ flex: 1, padding: '40px' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>
//           <img 
//             src="https://img.icons8.com/fluent/48/000000/graduation-cap.png" 
//             alt="Logo" 
//             style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
//           />
//           <h1 style={{ margin: 0, fontSize: '28px', color: '#1e293b', fontWeight: '700' }}>Online Assessment Examination Portal</h1>
//         </div>
        
//         {/* Profile Settings Section Added Smoothly Here */}
//         <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)', marginBottom: '20px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <div>
//               <h3 style={{ margin: 0 }}>My Profile Settings</h3>
//               <p style={{ color: '#64748b', fontSize: '14px', margin: '5px 0 0 0' }}>Fix typos or update your active registration credentials here.</p>
//             </div>
//             {!isEditing && (
//               <button 
//                 onClick={() => setIsEditing(true)}
//                 style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
//               >
//                 Update Credentials
//               </button>
//             )}
//           </div>

//           {isEditing && (
//             <form onSubmit={handleProfileUpdate} style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
//                 <div>
//                   <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Correct full Name</label>
//                   <input 
//                     type="text" 
//                     value={profileForm.name}
//                     required
//                     onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
//                     style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Correct Email Address</label>
//                   <input 
//                     type="email" 
//                     placeholder="enter new email if changing"
//                     value={profileForm.email}
//                     required
//                     onChange={e => setProfileForm({ ...profileForm, email: e.target.value })}
//                     style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
//                   />
//                 </div>
//               </div>
              
//               <div style={{ display: 'flex', gap: '10px' }}>
//                 <button 
//                   type="submit" 
//                   style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
//                 >
//                   Save Changes
//                 </button>
//                 <button 
//                   type="button" 
//                   onClick={() => setIsEditing(false)}
//                   style={{ background: '#94a3b8', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>

//         {activeTab === 'exams' && (
//           <div>
//             <h2>Your Assigned Assessments</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
//               {exams.map(exam => (
//                 <div key={exam._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <h3>{exam.title}</h3>
//                   <p style={{ color: '#64748b' }}>{exam.description || 'No description provided.'}</p>
//                   <p><strong>Duration:</strong> {exam.duration} Minutes</p>
//                   <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#e11d48', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Start Assessment Terminal</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div>
//             <h2>Class Lecture Tutorials</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginTop: '20px' }}>
//               {tutorials.map(t => (
//                 <div key={t._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
//                   <h3>{t.title}</h3>
//                   <p style={{ color: '#64748b' }}>{t.description}</p>
//                   <a href={t.videoUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>Launch Stream Lecture Terminal →</a>
//                   <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '15px' }}>Uploaded by Host: {t.uploadedBy?.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'inquiry' && (
//           <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2>Communications Hub: Send Desk Inquiry</h2>
//             <form onSubmit={handleInquirySubmit}>
//               <label>Recipient Office Email Address</label>
//               <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} />
              
//               <label>Subject Title</label>
//               <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} />
              
//               <label>Message Content Data Body</label>
//               <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px' }}></textarea>
              
//               <button type="submit" style={{ marginTop: '15px' }}>Send Outbound Inquiry</button>
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

// export default StudentDashboard;
//4
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentDashboard = () => {
//   // Added 'dashboard' as the initial default active tab view
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [exams, setExams] = useState([]);
//   const [tutorials, setTutorials] = useState([]);
//   const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
//   const navigate = useNavigate();
  
//   const token = localStorage.getItem('token');
  
//   // Dynamic parsing of Student User Profile information from localStorage 
//   const rawUser = localStorage.getItem('user');
//   const studentName = rawUser ? JSON.parse(rawUser).name : 'Student';

//   useEffect(() => {
//     if (activeTab === 'exams' || activeTab === 'dashboard') {
//       axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setExams(res.data)).catch(err => console.error(err));
//     } 
//     if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data)).catch(err => console.error(err));
//     }
//   }, [activeTab]);

//   const handleInquirySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/support/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Support inquiry dispatched successfully.');
//       setInquiry({ targetEmail: '', subject: '', message: '' });
//     } catch (err) {
//       alert('Failed to route helpdesk message.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
//       {/* SIDEBAR NAVIGATION PANEL */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
//         <div style={{ textAlign: 'center', marginBottom: '32px' }}>
//           <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>
//             STUDENT PORTAL
//           </h2>
//           {/* <span style={{ fontSize: '0.75rem', color: '#64748b', trackingLetter: '0.05em' }}>STUDENT PORTAL</span> */}
//         </div>

//         <nav style={{ flex: 1 }}>
//           <button onClick={() => setActiveTab('dashboard')} style={sidebarBtn(activeTab === 'dashboard')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
//             Dashboard Home
//           </button>
//           <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
//             Available Exams
//           </button>
//           <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
//             Video Tutorials
//           </button>
//           <button onClick={() => setActiveTab('inquiries')} style={sidebarBtn(activeTab === 'inquiries')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
//             Helpdesk Inquiry
//           </button>
//         </nav>

//         <button onClick={handleLogout} style={{ ...sidebarBtn(false), color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', textAlign: 'center', justifyContent: 'center' }}>
//           Exit Terminal
//         </button>
//       </div>

//       {/* DYNAMIC MAIN CONTENT SECTOR */}
//       <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
//         {/* TAB 0: UNIFIED DASHBOARD OVERVIEW HOME */}
//         {activeTab === 'dashboard' && (
//           <div>
//             {/* WELCOME BANNER SECTION */}
//             <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '32px' }}>
//               <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 8px 0' }}>
//                 Welcome back, {studentName}!
//               </h1>
//               <p style={{ margin: 0, color: '#bfdbfe', fontSize: '1rem', fontWeight: '500' }}>
//                 Your assessment tracking interface is up to date. You have pending test metrics awaiting action.
//               </p>
//             </div>

//             {/* PERFORMANCE METRICS ANALYTICS CARDS */}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
//               <div style={metricCardStyle}>
//                 <div>
//                   <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Active Exams</h4>
//                   <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>{exams.length}</h2>
//                 </div>
//                 <div style={{ color: '#2563eb', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
//                 </div>
//               </div>

//               <div style={metricCardStyle}>
//                 <div>
//                   <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Completed Modules</h4>
//                   <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>4</h2>
//                 </div>
//                 <div style={{ color: '#16a34a', backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '8px' }}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
//                 </div>
//               </div>

//               <div style={metricCardStyle}>
//                 <div>
//                   <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Average Accuracy</h4>
//                   <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>84%</h2>
//                 </div>
//                 <div style={{ color: '#ca8a04', backgroundColor: '#fefce8', padding: '10px', borderRadius: '8px' }}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
//                 </div>
//               </div>
//             </div>

//             {/* QUICK ACTIONS & NOTICES RECENT SECTION */}
//             <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
//               <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
//                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px', marginTop: 0 }}>Urgent Available Exams</h3>
//                 {exams.slice(0, 2).map(exam => (
//                   <div key={exam._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #f1f5f9' }}>
//                     <div>
//                       <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: '600' }}>{exam.title}</h5>
//                       <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Duration: {exam.duration} mins | Marks: {exam.totalMarks}</span>
//                     </div>
//                     <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
//                       Take Test
//                     </button>
//                   </div>
//                 ))}
//                 {exams.length === 0 && <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>No dynamic assessment profiles currently assigned.</p>}
//               </div>

//               <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
//                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px', marginTop: 0 }}>System Notices</h3>
//                 <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
//                   <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
//                     <strong style={{ color: '#0f172a' }}>🔒 Proctored Environment</strong>
//                     <p style={{ margin: '4px 0 0 0' }}>All active assessments feature sandbox execution security structures.</p>
//                   </div>
//                   <div>
//                     <strong style={{ color: '#0f172a' }}>📁 Lecture Repository</strong>
//                     <p style={{ margin: '4px 0 0 0' }}>New recommended video tracks have been pushed into your learning panel feed.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TAB 1: AVAILABLE EXAMS */}
//         {activeTab === 'exams' && (
//           <div>
//             <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '24px', color: '#1e293b' }}>
//               Deployed Assessments
//             </h1>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//               {exams.map(exam => (
//                 <div key={exam._id} style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>{exam.title}</h3>
//                   <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px' }}>{exam.description}</p>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
//                     <span><b>Duration:</b> {exam.duration} mins</span>
//                     <span><b>Total Marks:</b> {exam.totalMarks}</span>
//                   </div>
//                   <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ width: '100%', background: '#0284c7', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
//                     Launch Test Terminal
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* TAB 2: VIDEO TUTORIALS */}
//         {activeTab === 'lectures' && (
//           <div>
//             <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '24px', color: '#1e293b' }}>
//               Core Lectures & Recommendations
//             </h1>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
//               {tutorials.map(video => (
//                 <div key={video._id} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <div style={{ width: '100%', height: '180px', background: '#000' }}>
//                     <iframe width="100%" height="100%" src={video.videoUrl.replace("watch?v=", "embed/")} title={video.title} frameBorder="0" allowFullScreen></iframe>
//                   </div>
//                   <div style={{ padding: '20px' }}>
//                     <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '6px' }}>{video.title}</h3>
//                     <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{video.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* TAB 3: HELPDESK INQUIRY */}
//         {activeTab === 'inquiries' && (
//           <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', color: '#1e293b' }}>
//               Communications Hub: Send Desk Inquiry
//             </h2>
//             <form onSubmit={handleInquirySubmit}>
//               <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Recipient Office Email Address</label>
//               <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '16px' }} />
              
//               <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Subject Title</label>
//               <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '16px' }} />
              
//               <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Message Content Data Body</label>
//               <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px', marginBottom: '16px', resize: 'vertical' }}></textarea>
              
//               <button type="submit" style={{ width: '100%', background: '#0f172a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
//                 Send Outbound Inquiry
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Extracted styles and structures
// const sidebarBtn = (isActive) => ({
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%', 
//   padding: '12px 16px', 
//   margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#94a3b8',
//   border: 'none',
//   borderRadius: '6px',
//   textAlign: 'left',
//   fontSize: '0.95rem',
//   fontWeight: '600',
//   cursor: 'pointer',
//   transition: 'all 0.2s',
//   outline: 'none'
// });

// const metricCardStyle = {
//   backgroundColor: 'white',
//   padding: '24px',
//   borderRadius: '12px',
//   boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center'
// };

// export default StudentDashboard;
//5
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [exams, setExams] = useState([]);
//   const [tutorials, setTutorials] = useState([]);
//   const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
  
//   // =================================================================
//   // ✨ HIGHLIGHT: ADDED STATE VARIABLE FOR LIVE DATABASE STUDENT NAME
//   // =================================================================
//   const [studentName, setStudentName] = useState(localStorage.getItem('username') || 'Student');

//   useEffect(() => {
//     // =================================================================
//     // ✨ HIGHLIGHT: API FETCH TO RETRIEVE STUDENT PROFILE FROM DATABASE
//     // =================================================================
//     axios.get('http://localhost:5000/api/students/profile', { 
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => {
//       // Gracefully handles matching your API payload structure (e.g. res.data.name or res.data.user.name)
//       setStudentName(res.data.name || res.data.user?.name || 'Student');
//     })
//     .catch(err => {
//       console.error('Error fetching live database profile:', err);
//       setStudentName('Student'); // Fallback if API fails
//     });
//     // =================================================================

//     if (activeTab === 'exams' || activeTab === 'dashboard') {
//       axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setExams(res.data)).catch(err => console.error(err));
//     } 
//     if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data)).catch(err => console.error(err));
//     }
//   }, [activeTab, token]);

//   const handleInquirySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/support/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Support inquiry dispatched successfully.');
//       setInquiry({ targetEmail: '', subject: '', message: '' });
//     } catch (err) {
//       alert('Failed to route helpdesk message.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
//       {/* SIDEBAR NAVIGATION PANEL */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
//         <div style={{ textAlign: 'center', marginBottom: '32px' }}>
//           <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>
//             STUDENT PORTAL
//           </h2>
//         </div>

//         <hr style={{ borderColor: '#f7fb1f', margin: '0 0 20px 0', width: '100%' }} />

//         <nav style={{ flex: 1 }}>
//           <button onClick={() => setActiveTab('dashboard')} style={sidebarBtn(activeTab === 'dashboard')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
//             Dashboard Home
//           </button>
//           <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
//             Available Exams
//           </button>
//           <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
//             Video Tutorials
//           </button>
//           <button onClick={() => setActiveTab('inquiries')} style={sidebarBtn(activeTab === 'inquiries')}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
//             Helpdesk Inquiry
//           </button>
//         </nav>

//         <button onClick={handleLogout} style={{ ...sidebarBtn(false), color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', textAlign: 'center', justifyContent: 'center' }}>
//           Logout
//         </button>
//       </div>

//       {/* DYNAMIC MAIN CONTENT SECTOR */}
//       <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
//         {/* TAB 0: UNIFIED DASHBOARD OVERVIEW HOME */}
//         {activeTab === 'dashboard' && (
//           <div>
//             {/* WELCOME BANNER SECTION */}
//             <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '32px' }}>
              
//               {/* ================================================================= */}
//               {/* ✨ HIGHLIGHT: DISPLAYING DYNAMIC STUDENT NAME VARIABLE FROM DATABASE */}
//               {/* ================================================================= */}
//               <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 8px 0' }}>
//                 Welcome back, {studentName}!
//               </h1>
//               {/* ================================================================= */}
              
//               <p style={{ margin: 0, color: '#bfdbfe', fontSize: '1rem', fontWeight: '500' }}>
//                 Your assessment tracking interface is up to date. You have pending test metrics awaiting action.
//               </p>
//             </div>

//             {/* PERFORMANCE METRICS ANALYTICS CARDS */}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
//               <div style={metricCardStyle}>
//                 <div>
//                   <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Active Exams</h4>
//                   <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>{exams.length}</h2>
//                 </div>
//                 <div style={{ color: '#2563eb', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
//                 </div>
//               </div>

//               <div style={metricCardStyle}>
//                 <div>
//                   <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Completed Modules</h4>
//                   <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>4</h2>
//                 </div>
//                 <div style={{ color: '#16a34a', backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '8px' }}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
//                 </div>
//               </div>

//               <div style={metricCardStyle}>
//                 <div>
//                   <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Average Accuracy</h4>
//                   <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>84%</h2>
//                 </div>
//                 <div style={{ color: '#ca8a04', backgroundColor: '#fefce8', padding: '10px', borderRadius: '8px' }}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
//                 </div>
//               </div>
//             </div>

//             {/* QUICK ACTIONS & NOTICES RECENT SECTION */}
//             <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
//               <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
//                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px', marginTop: 0 }}>Urgent Available Exams</h3>
//                 {exams.slice(0, 2).map(exam => (
//                   <div key={exam._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #f1f5f9' }}>
//                     <div>
//                       <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: '600' }}>{exam.title}</h5>
//                       <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Duration: {exam.duration} mins | Marks: {exam.totalMarks}</span>
//                     </div>
//                     <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
//                       Take Test
//                     </button>
//                   </div>
//                 ))}
//                 {exams.length === 0 && <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>No dynamic assessment profiles currently assigned.</p>}
//               </div>

//               <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
//                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px', marginTop: 0 }}>System Notices</h3>
//                 <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
//                   <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
//                     <strong style={{ color: '#0f172a' }}>🔒 Proctored Environment</strong>
//                     <p style={{ margin: '4px 0 0 0' }}>All active assessments feature sandbox execution security structures.</p>
//                   </div>
//                   <div>
//                     <strong style={{ color: '#0f172a' }}>📁 Lecture Repository</strong>
//                     <p style={{ margin: '4px 0 0 0' }}>New recommended video tracks have been pushed into your learning panel feed.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TAB 1: AVAILABLE EXAMS */}
//         {activeTab === 'exams' && (
//           <div>
//             <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '24px', color: '#1e293b' }}>
//               Deployed Assessments
//             </h1>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//               {exams.map(exam => (
//                 <div key={exam._id} style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>{exam.title}</h3>
//                   <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px' }}>{exam.description}</p>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
//                     <span><b>Duration:</b> {exam.duration} mins</span>
//                     <span><b>Total Marks:</b> {exam.totalMarks}</span>
//                   </div>
//                   <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ width: '100%', background: '#0284c7', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
//                     Launch Test Terminal
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* TAB 2: VIDEO TUTORIALS */}
//         {activeTab === 'lectures' && (
//           <div>
//             <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '24px', color: '#1e293b' }}>
//               Core Lectures & Recommendations
//             </h1>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
//               {tutorials.map(video => (
//                 <div key={video._id} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <div style={{ width: '100%', height: '180px', background: '#000' }}>
//                     <iframe width="100%" height="100%" src={video.videoUrl.replace("watch?v=", "embed/")} title={video.title} frameBorder="0" allowFullScreen></iframe>
//                   </div>
//                   <div style={{ padding: '20px' }}>
//                     <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '6px' }}>{video.title}</h3>
//                     <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{video.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* TAB 3: HELPDESK INQUIRY */}
//         {activeTab === 'inquiries' && (
//           <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', color: '#1e293b' }}>
//               Communications Hub: Send Desk Inquiry
//             </h2>
//             <form onSubmit={handleInquirySubmit}>
//               <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Recipient Office Email Address</label>
//               <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '16px' }} />
              
//               <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Subject Title</label>
//               <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '16px' }} />
              
//               <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Message Content Data Body</label>
//               <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px', marginBottom: '16px', resize: 'vertical' }}></textarea>
              
//               <button type="submit" style={{ width: '100%', background: '#0f172a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
//                 Send Outbound Inquiry
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const sidebarBtn = (isActive) => ({
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%', 
//   padding: '12px 16px', 
//   margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#94a3b8',
//   border: 'none',
//   borderRadius: '6px',
//   textAlign: 'left',
//   fontSize: '0.95rem',
//   fontWeight: '600',
//   cursor: 'pointer',
//   transition: 'all 0.2s',
//   outline: 'none'
// });

// const metricCardStyle = {
//   backgroundColor: 'white',
//   padding: '24px',
//   borderRadius: '12px',
//   boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center'
// };

// export default StudentDashboard;
//6
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [activeTab, setActiveTab] = useState('exams');
//   const [exams, setExams] = useState([]);
//   const [tutorials, setTutorials] = useState([]);
//   const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
  
//   // Credentials Profile Form Hooks
//   const [profileForm, setProfileForm] = useState({ 
//     name: localStorage.getItem('userName') || localStorage.getItem('name') || '', 
//     email: localStorage.getItem('email') || '' 
//   });

//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (activeTab === 'exams') {
//       axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setExams(res.data)).catch(err => console.error(err));
//     } else if (activeTab === 'lectures') {
//       axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
//         .then(res => setTutorials(res.data)).catch(err => console.error(err));
//     }
//   }, [activeTab]);

//   const handleInquirySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
//       alert('Your inquiry has been directly routed and sent successfully!');
//       setInquiry({ targetEmail: '', subject: '', message: '' });
//     } catch (err) { alert('Inquiry dispatch failed over server.'); }
//   };

//   // ✅ HANDLER: Update profile credentials matching your server layout structure
//   const handleProfileUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put('http://localhost:5000/api/students/update-profile', profileForm, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Profile updated successfully!');
      
//       // Keep state values in local storage perfectly aligned
//       const updatedUser = res.data?.user || res.data;
//       localStorage.setItem('userName', updatedUser.name || profileForm.name);
//       localStorage.setItem('name', updatedUser.name || profileForm.name);
//       localStorage.setItem('email', updatedUser.email || profileForm.email);
      
//       window.location.reload(); 
//     } catch (err) {
//       alert(err.response?.data?.message || 'Failed to update profile records.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
//       {/* Sidebar Navigation */}
//       <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
//         <div style={{ marginBottom: '32px', paddingLeft: '8px' }}>
//           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: '0 0 4px 0' }}>Student Portal</h3>
//           <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '500', margin: 0 }}>
//             Active: {localStorage.getItem('userName') || 'Student'}
//           </p>
//         </div>
        
//         <hr style={{ borderColor: '#1e293b', margin: '0 0 20px 0', width: '100%' }} />
        
//         <nav style={{ flex: 1 }}>
//           <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>
//             ✍️ Available Exams
//           </button>
//           <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>
//             🎥 Video Tutorials
//           </button>
//           <button onClick={() => setActiveTab('inquiry')} style={sidebarBtn(activeTab === 'inquiry')}>
//             📬 Helpdesk Inquiry
//           </button>
          
//           {/* ✅ SIDEBAR LINK: Credentials tab access button */}
//           <button onClick={() => setActiveTab('profile')} style={sidebarBtn(activeTab === 'profile')}>
//             ⚙️ Account Settings
//           </button>
//         </nav>
        
//         <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ ...sidebarBtn(false), color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', textAlign: 'center', justifyContent: 'center', marginTop: 'auto' }}>
//           Quit Portal
//         </button>
//       </div>

//       {/* Workspace content */}
//       <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
//         {activeTab === 'exams' && (
//           <div>
//             <h2 style={{ marginTop: 0, color: '#0f172a' }}>Your Assigned Assessments</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
//               {exams.map(exam => (
//                 <div key={exam._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//                   <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>{exam.title}</h3>
//                   <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{exam.description || 'No description provided.'}</p>
//                   <p style={{ fontSize: '0.95rem' }}><strong>Duration:</strong> {exam.duration} Minutes</p>
//                   <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#e11d48', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', marginTop: '10px' }}>
//                     Start Assessment Terminal
//                   </button>
//                 </div>
//               ))}
//               {exams.length === 0 && (
//                 <p style={{ color: '#64748b' }}>No pending examinations active on your register.</p>
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === 'lectures' && (
//           <div>
//             <h2 style={{ marginTop: 0, color: '#0f172a' }}>Class Lecture Tutorials</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginTop: '20px' }}>
//               {tutorials.map(t => (
//                 <div key={t._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
//                   <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>{t.title}</h3>
//                   <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{t.description}</p>
//                   <a href={t.videoUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '5px' }}>
//                     Launch Stream Lecture Terminal →
//                   </a>
//                   <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '15px', marginBottom: 0 }}>Uploaded by Host: {t.uploadedBy?.name || 'Faculty Office'}</p>
//                 </div>
//               ))}
//               {tutorials.length === 0 && (
//                 <p style={{ color: '#64748b' }}>No video lecture feeds uploaded yet.</p>
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === 'inquiry' && (
//           <div style={{ maxWidth: '550px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2 style={{ marginTop: 0, color: '#0f172a' }}>Communications Hub: Send Desk Inquiry</h2>
//             <form onSubmit={handleInquirySubmit}>
//               <label style={labelStyle}>Recipient Office Email Address</label>
//               <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} style={inputStyle} />
              
//               <label style={labelStyle}>Subject Title</label>
//               <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} style={inputStyle} />
              
//               <label style={labelStyle}>Message Content Data Body</label>
//               <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px', outline: 'none', resize: 'vertical' }}></textarea>
              
//               <button type="submit" style={{ width: '100%', background: '#0f172a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', marginTop: '18px' }}>
//                 Send Outbound Inquiry
//               </button>
//             </form>
//           </div>
//         )}

//         {/* ✅ UI VIEW: Added matching UI panels to interact with the profile credentials fields */}
//         {activeTab === 'profile' && (
//           <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
//             <h2 style={{ marginTop: 0, color: '#0f172a' }}>Update Account Credentials</h2>
//             <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Modify your profile attributes below. Changes sync live with your permanent database file registry.</p>
            
//             <form onSubmit={handleProfileUpdate}>
//               <label style={labelStyle}>Full Registered Name</label>
//               <input 
//                 type="text" 
//                 required 
//                 value={profileForm.name} 
//                 onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} 
//                 style={inputStyle} 
//               />
              
//               <label style={labelStyle}>Primary Contact Email</label>
//               <input 
//                 type="email" 
//                 required 
//                 value={profileForm.email} 
//                 onChange={e => setProfileForm({ ...profileForm, email: e.target.value })} 
//                 style={inputStyle} 
//               />
              
//               <button type="submit" style={{ width: '100%', background: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', marginTop: '20px' }}>
//                 Save Updated Credentials
//               </button>
//             </form>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// const sidebarBtn = (isActive) => ({
//   display: 'block', 
//   width: '100%', 
//   padding: '12px 16px', 
//   margin: '8px 0',
//   backgroundColor: isActive ? '#1e293b' : 'transparent',
//   color: isActive ? '#38bdf8' : '#cbd5e1',
//   border: 'none', 
//   borderRadius: '6px', 
//   cursor: 'pointer', 
//   textAlign: 'left', 
//   fontWeight: '600',
//   fontSize: '0.95rem',
//   outline: 'none'
// });

// const labelStyle = {
//   display: 'block', 
//   fontSize: '0.9rem', 
//   fontWeight: '600', 
//   marginBottom: '6px', 
//   color: '#475569',
//   marginTop: '14px'
// };

// const inputStyle = {
//   width: '100%', 
//   padding: '10px', 
//   borderRadius: '6px', 
//   border: '1px solid #cbd5e1', 
//   outline: 'none',
//   marginBottom: '4px'
// };

// export default StudentDashboard;
//7
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [exams, setExams] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [inquiry, setInquiry] = useState({ targetEmail: '', subject: '', message: '' });
  
  // Credentials Profile Form Hooks
  const [profileForm, setProfileForm] = useState({ 
    name: localStorage.getItem('userName') || localStorage.getItem('name') || '', 
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const studentName = localStorage.getItem('userName') || localStorage.getItem('name') || 'Student';

  useEffect(() => {
    // Sync and capture exams data if on Dashboard Home or the Available Exams view
    if (activeTab === 'exams' || activeTab === 'dashboard') {
      axios.get('http://localhost:5000/api/exams', { headers: { Authorization: `Bearer ${token}` }})
        .then(res => setExams(res.data)).catch(err => console.error(err));
    } 
    
    if (activeTab === 'lectures') {
      axios.get('http://localhost:5000/api/tutorials', { headers: { Authorization: `Bearer ${token}` }})
        .then(res => setTutorials(res.data)).catch(err => console.error(err));
    }
  }, [activeTab]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inquiry', inquiry, { headers: { Authorization: `Bearer ${token}` }});
      alert('Your inquiry has been directly routed and sent successfully!');
      setInquiry({ targetEmail: '', subject: '', message: '' });
    } catch (err) { alert('Inquiry dispatch failed over server.'); }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5000/api/students/update-profile', profileForm, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Profile updated successfully!');
      
      const updatedUser = res.data?.user || res.data;
      localStorage.setItem('userName', updatedUser.name || profileForm.name);
      localStorage.setItem('name', updatedUser.name || profileForm.name);
      localStorage.setItem('email', updatedUser.email || profileForm.email);
      localStorage.setItem('password', updatedUser.password || profileForm.password);
      
      window.location.reload(); 
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update profile records.');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
      {/* Sidebar Navigation */}
      <div style={{ width: '260px', backgroundColor: '#0f172a', color: 'white', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '32px', paddingLeft: '8px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: '0 0 4px 0' }}>Student Portal</h3>
          <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '500', margin: 0 }}>
            Active: {studentName}
          </p>
        </div>
        
        <hr style={{ borderColor: '#1e293b', margin: '0 0 20px 0', width: '100%' }} />
        
        <nav style={{ flex: 1 }}>
          {/* 🛠️ ADDED: Dashboard button to sidebar tracking state mapping */}
          <button onClick={() => setActiveTab('dashboard')} style={sidebarBtn(activeTab === 'dashboard')}>
            🏠 Dashboard Home
          </button>
          <button onClick={() => setActiveTab('exams')} style={sidebarBtn(activeTab === 'exams')}>
            ✍️ Available Exams
          </button>
          <button onClick={() => setActiveTab('lectures')} style={sidebarBtn(activeTab === 'lectures')}>
            🎥 Video Tutorials
          </button>
          <button onClick={() => setActiveTab('inquiry')} style={sidebarBtn(activeTab === 'inquiry')}>
            📬 Helpdesk Inquiry
          </button>
          <button onClick={() => setActiveTab('profile')} style={sidebarBtn(activeTab === 'profile')}>
            ⚙️ Account Settings
          </button>
        </nav>
        
        <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ ...sidebarBtn(false), color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', textAlign: 'center', justifyContent: 'center', marginTop: 'auto' }}>
          Logout
        </button>
      </div>

      {/* Workspace content */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
        {/* 🛠️ ADDED: NEW PROFESSIONAL MAIN DASHBOARD BANNER & WIDGET HOME CARD LAYOUT */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Elegant Gradient Banner */}
            <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', color: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 8px 0' }}>
                Welcome back, {studentName}!
              </h1>
              <p style={{ margin: 0, color: '#bfdbfe', fontSize: '1rem', fontWeight: '500' }}>
                Your assessment portal terminal workspace is ready. Access active evaluations and trace recommendations.
              </p>
            </div>

            {/* Performance Analytics Metric Row Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <div style={metricCardStyle}>
                <div>
                  <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0', letterSpacing: '0.025em' }}>Assigned Tests</h4>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>{exams.length}</h2>
                </div>
                <div style={{ color: '#2563eb', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
                  ✍️
                </div>
              </div>

              <div style={metricCardStyle}>
                <div>
                  <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0', letterSpacing: '0.025em' }}>System Standing</h4>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#16a34a', margin: '6px 0 0 0' }}>Good Standing</h2>
                </div>
                <div style={{ color: '#16a34a', backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '8px' }}>
                  🛡️
                </div>
              </div>

              <div style={metricCardStyle}>
                <div>
                  <h4 style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 6px 0', letterSpacing: '0.025em' }}>Communications</h4>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: '6px 0 0 0' }}>Desk Active</h2>
                </div>
                <div style={{ color: '#ca8a04', backgroundColor: '#fefce8', padding: '10px', borderRadius: '8px' }}>
                  📬
                </div>
              </div>
            </div>

            {/* Overview of Immediate Items */}
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px', marginTop: 0 }}>Immediate Tasks Overview</h3>
              {exams.slice(0,).map(exam => (
                <div key={exam._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: '600', color: '#1e293b' }}>{exam.title}</h5>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Limit: {exam.duration} Minutes</span>
                  </div>
                  <button onClick={() => setActiveTab('exams')} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
                    View Exams
                  </button>
                </div>
              ))}
              {exams.length === 0 && (
                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>No assessments are currently listed on your roster grid tracking feed.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 1: AVAILABLE EXAMS */}
        {activeTab === 'exams' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Your Assigned Assessments</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              {exams.map(exam => (
                <div key={exam._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>{exam.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{exam.description || 'No description provided.'}</p>
                  <p style={{ fontSize: '0.95rem' }}><strong>Duration:</strong> {exam.duration} Minutes</p>
                  <button onClick={() => navigate(`/take-exam/${exam._id}`)} style={{ background: '#e11d48', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', marginTop: '10px' }}>
                    Start Assessment Terminal
                  </button>
                </div>
              ))}
              {exams.length === 0 && (
                <p style={{ color: '#64748b' }}>No pending examinations active on your register.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: VIDEO TUTORIALS */}
        {activeTab === 'lectures' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Class Lecture Tutorials</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginTop: '20px' }}>
              {tutorials.map(t => (
                <div key={t._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>{t.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{t.description}</p>
                  {/* <a href={t.videoUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '5px' }}>
                    Launch Stream Lecture Terminal →
                  </a> */}
                  {/* ✅ Dynamic Media Player Block Added */}
                  <div style={{ marginTop: '15px', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#000' }}>
                    {t.videoUrl.includes('youtube.com') || t.videoUrl.includes('youtu.be') ? (
                      // If the database URL is a YouTube link, convert it to a valid embed path and render an iframe
                      <iframe
                        width="100%"
                        height="220"
                        src={t.videoUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                        title={t.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      // Fallback standard HTML5 player for native MP4 or general file links
                      <video 
                        src={t.videoUrl} 
                        controls 
                        style={{ width: '100%', height: '220px', display: 'block' }}
                      />
                    )}
                  </div>
                  <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '15px', marginBottom: 0 }}>Uploaded by Host: {t.uploadedBy?.name || 'Faculty Office'}</p>
                </div>
              ))}
              {tutorials.length === 0 && (
                <p style={{ color: '#64748b' }}>No video lecture feeds uploaded yet.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: HELPDESK INQUIRY */}
        {activeTab === 'inquiry' && (
          <div style={{ maxWidth: '550px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
            <h2>Communications Hub: Send Desk Inquiry</h2>
            <form onSubmit={handleInquirySubmit}>
              <label style={labelStyle}>Recipient Office Email Address</label>
              <input type="email" required value={inquiry.targetEmail} onChange={e => setInquiry({...inquiry, targetEmail: e.target.value})} style={inputStyle} />
              
              <label style={labelStyle}>Subject Title</label>
              <input type="text" required value={inquiry.subject} onChange={e => setInquiry({...inquiry, subject: e.target.value})} style={inputStyle} />
              
              <label style={labelStyle}>Message Content Data Body</label>
              <textarea rows="5" required value={inquiry.message} onChange={e => setInquiry({...inquiry, message: e.target.value})} style={{ width:'100%', border:'1px solid #cbd5e1', borderRadius:'6px', padding:'10px', marginBottom: '16px', resize: 'vertical', outline: 'none' }}></textarea>
              
              <button type="submit" style={{ width: '100%', background: '#0f172a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                Send Outbound Inquiry
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: UPDATE ACCOUNT CREDENTIALS */}
        {activeTab === 'profile' && (
          <div style={{ maxWidth: '500px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Update Account Credentials</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Modify your profile attributes below. Changes sync live with your permanent database file registry.</p>
            
            <form onSubmit={handleProfileUpdate}>
              <label style={labelStyle}>Full Registered Name</label>
              <input 
                type="text" 
                required 
                value={profileForm.name} 
                onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} 
                style={inputStyle} 
              />
              
              <label style={labelStyle}>Primary Contact Email</label>
              <input 
                type="email" 
                required 
                value={profileForm.email} 
                onChange={e => setProfileForm({ ...profileForm, email: e.target.value })} 
                style={inputStyle} 
              />

              <label style={labelStyle}>Primary Contact Password</label>
              <input 
                type="password" 
                required 
                value={profileForm.password} 
                onChange={e => setProfileForm({ ...profileForm, password: e.target.value })} 
                style={inputStyle} 
              />
              
              <button type="submit" style={{ width: '100%', background: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', marginTop: '20px' }}>
                Save Updated Credentials
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
  margin: '8px 0',
  backgroundColor: isActive ? '#1e293b' : 'transparent',
  color: isActive ? '#38bdf8' : '#94a3b8',
  border: 'none',
  borderRadius: '6px',
  textAlign: 'left',
  fontSize: '0.95rem',
  fontWeight: '600',
  cursor: 'pointer',
  outline: 'none'
});

const labelStyle = {
  display: 'block', 
  fontSize: '0.9rem', 
  fontWeight: '600', 
  marginBottom: '6px', 
  color: '#475569',
  marginTop: '14px'
};

const inputStyle = {
  width: '100%', 
  padding: '10px', 
  borderRadius: '6px', 
  border: '1px solid #cbd5e1', 
  outline: 'none',
  marginBottom: '4px'
};

const metricCardStyle = {
  backgroundColor: 'white',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export default StudentDashboard;