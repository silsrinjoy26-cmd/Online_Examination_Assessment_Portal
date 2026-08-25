// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('role', res.data.role);
//       localStorage.setItem('userName', res.data.name || formData.name ||'');
//       localStorage.setItem('email', res.data.email || formData.email ||'');

//       if (res.data.role === 'admin') navigate('/admin-dashboard');
//       else navigate('/student-dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid email or password.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
//       <h2 style={{ textAlign: 'center', color: '#1e293b' }}>Portal Login</h2>
//       {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>Email Address</label>
//         <input type="email" required onChange={e => setFormData({...formData, email: e.target.value})} />
        
//         <label>Password</label>
//         <input type="password" required onChange={e => setFormData({...formData, password: e.target.value})} />
        
//         <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold',marginTop: '20px' }}>Sign In</button>
//       </form>
//       <p style={{ textAlign: 'center', marginTop: '20px' }}>
//         New user? <Link to="/register" style={{ color: '#2563eb' }}>Create a student account</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
//2
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false); // State to toggle visibility
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('role', res.data.role);
//       localStorage.setItem('userName', res.data.name || formData.name || '');
//       localStorage.setItem('email', res.data.email || formData.email || '');

//       if (res.data.role === 'admin') navigate('/admin-dashboard');
//       else navigate('/student-dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid email or password.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
//       <h2 style={{ textAlign: 'center', color: '#1e293b' }}>Portal Login</h2>
//       {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
//         <input 
//           type="email" 
//           required 
//           onChange={e => setFormData({...formData, email: e.target.value})} 
//           style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
//         />
        
//         <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
//         {/* Relative container to house input and absolute eye button */}
//         <div style={{ position: 'relative', width: '100%' }}>
//           <input 
//             type={showPassword ? 'text' : 'password'} 
//             required 
//             onChange={e => setFormData({...formData, password: e.target.value})} 
//             style={{ width: '100%', padding: '10px', paddingRight: '40px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
//           />
//           <span 
//             onClick={() => setShowPassword(!showPassword)} 
//             style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', userSelect: 'none', fontSize: '16px' }}
//           >
//             {showPassword ? '🙈' : '👁️'}
//           </span>
//         </div>
        
//         <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>Sign In</button>
//       </form>
//       <p style={{ textAlign: 'center', marginTop: '20px' }}>
//         New user? <Link to="/register" style={{ color: '#2563eb' }}>Create a student account</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
//3
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('role', res.data.role);
//       localStorage.setItem('userName', res.data.name || formData.name || '');
//       localStorage.setItem('email', res.data.email || formData.email || '');

//       if (res.data.role === 'admin') navigate('/admin-dashboard');
//       else navigate('/student-dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid email or password.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
//       <h2 style={{ textAlign: 'center', color: '#1e293b' }}>Portal Login</h2>
//       {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
//         <input 
//           type="email" 
//           required 
//           onChange={e => setFormData({...formData, email: e.target.value})} 
//           style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
//         />
        
//         <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
//         <div style={{ position: 'relative', width: '100%' }}>
//           <input 
//             type={showPassword ? 'text' : 'password'} 
//             required 
//             onChange={e => setFormData({...formData, password: e.target.value})} 
//             style={{ width: '100%', padding: '10px', paddingRight: '40px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             style={{ 
//               position: 'absolute', 
//               right: '12px', 
//               top: '50%', 
//               transform: 'translateY(-50%)', 
//               background: 'none', 
//               border: 'none', 
//               cursor: 'pointer', 
//               display: 'flex', 
//               alignItems: 'center', 
//               padding: 0 
//             }}
//           >
//             {showPassword ? (
//               /* Transparent Open Eye with Eyelashes */
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
//                 <circle cx="12" cy="12" r="3"/>
//                 <line x1="12" y1="5" x2="12" y2="2"/>
//                 <line x1="5.1" y1="7.9" x2="3" y2="5.8"/>
//                 <line x1="18.9" y1="7.9" x2="21" y2="5.8"/>
//               </svg>
//             ) : (
//               /* Closed Eye with Eyelashes (Slats pointing down) */
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a16.12 16.12 0 0 1 3.23-4.36"/>
//                 <path d="M12 4c4.47 0 7.4 3.06 10 8a12.8 12.8 0 0 1-1.74 2.76"/>
//                 <line x1="1" y1="1" x2="23" y2="23"/>
//                 <line x1="12" y1="20" x2="12" y2="17"/>
//                 <line x1="5.1" y1="16.1" x2="3" y2="14"/>
//                 <line x1="18.9" y1="16.1" x2="21" y2="14"/>
//               </svg>
//             )}
//           </button>
//         </div>
        
//         <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>Sign In</button>
//       </form>
//       <p style={{ textAlign: 'center', marginTop: '20px' }}>
//         New user? <Link to="/register" style={{ color: '#2563eb' }}>Create a student account</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
//4
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });     
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Added states for Forgot Password mode without altering base functionality
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (isForgotMode) {
      // Handle Forgot Password Update
      try {
        const res = await axios.put('http://localhost:5000/api/auth/update-password', {
          email: formData.email,
          newPassword: formData.password
        });
        setSuccessMessage(res.data?.message || 'Password updated successfully! You can now login.');
        setIsForgotMode(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to update password. Ensure email is correct.');
      }
    } else {
      // Original Login Logic preserved exactly as it was
      try {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('userName', res.data.name || formData.name || '');
        localStorage.setItem('email', res.data.email || formData.email || '');

        if (res.data.role === 'admin') navigate('/admin-dashboard');
        else navigate('/student-dashboard');
      } catch (err) {
        setError(err.response?.data?.message || 'Invalid email or password.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#1e293b' }}>
        {isForgotMode ? 'Reset Password' : 'Portal Login'}
      </h2>
      {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}
      {successMessage && <p style={{ color: '#10b981', textAlign: 'center' }}>{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
        <input 
          type="email" 
          required 
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})} 
          style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
        />
        
        <label style={{ display: 'block', marginBottom: '5px' }}>
          {isForgotMode ? 'New Password' : 'Password'}
        </label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            type={showPassword ? 'text' : 'password'} 
            required 
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})} 
            style={{ width: '100%', padding: '10px', paddingRight: '40px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              padding: 0 
            }}
          >
            {showPassword ? (
              /* Transparent Open Eye with Eyelashes */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                <circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="5" x2="12" y2="2"/>
                <line x1="5.1" y1="7.9" x2="3" y2="5.8"/>
                <line x1="18.9" y1="7.9" x2="21" y2="5.8"/>
              </svg>
            ) : (
              /* Closed Eye with Eyelashes (Slats pointing down) */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a16.12 16.12 0 0 1 3.23-4.36"/>
                <path d="M12 4c4.47 0 7.4 3.06 10 8a12.8 12.8 0 0 1-1.74 2.76"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
                <line x1="12" y1="20" x2="12" y2="17"/>
                <line x1="5.1" y1="16.1" x2="3" y2="14"/>
                <line x1="18.9" y1="16.1" x2="21" y2="14"/>
              </svg>
            )}
          </button>
        </div>

        {/* Toggle option for Forgot Password */}
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <span 
            onClick={() => {
              setIsForgotMode(!isForgotMode);
              setError('');
              setSuccessMessage('');
            }} 
            style={{ color: '#2563eb', cursor: 'pointer', fontSize: '14px' }}
          >
            {isForgotMode ? 'Back to Login' : 'Forgot Password?'}
          </span>
        </div>
        
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>
          {isForgotMode ? 'Update Password' : 'Sign In'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        New user? <Link to="/register" style={{ color: '#2563eb' }}>Create a student account</Link>
      </p>
    </div>
  );
};

export default Login;