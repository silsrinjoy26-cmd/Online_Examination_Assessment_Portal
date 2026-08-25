// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', formData);
//       alert('Registration successful! You can now log in.');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed. Try a different email.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '80px auto', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
//       <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '20px' }}>Create Student Account</h2>
//       {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}
      
//       <form onSubmit={handleSubmit}>
//         <label>Full Name</label>
//         <input type="text" required onChange={e => setFormData({...formData, name: e.target.value})} />

//         <label>Email Address</label>
//         <input type="email" required onChange={e => setFormData({...formData, email: e.target.value})} />
        
//         <label>Password</label>
//         <input type="password" required onChange={e => setFormData({...formData, password: e.target.value})} />
        
//         <button type="submit" style={{ width: '100%', marginTop: '10px', backgroundColor: '#10b981' }}>
//           Register Account
//         </button>
//       </form>
      
//       <p style={{ textAlign: 'center', marginTop: '20px' }}>
//         Already have an account? <Link to="/login" style={{ color: '#2563eb' }}>Sign in here</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;
//2
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });
  const [showPassword, setShowPassword] = useState(false); // 1. State for password visibility toggle
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Try a different email.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '20px' }}>Create Student Account</h2>
      {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
        <input 
          type="text" 
          required 
          onChange={e => setFormData({...formData, name: e.target.value})} 
          style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
        />

        <label style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
        <input 
          type="email" 
          required 
          onChange={e => setFormData({...formData, email: e.target.value})} 
          style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
        />
        
        <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
        {/* 2. Relative wrapper block matching login layout structural parameters */}
        <div style={{ position: 'relative', width: '100%', marginBottom: '15px' }}>
          <input 
            type={showPassword ? 'text' : 'password'} 
            required 
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
        
        <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
          Register Account
        </button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Already have an account? <Link to="/login" style={{ color: '#2563eb' }}>Sign in here</Link>
      </p>
    </div>
  );
};

export default Register;