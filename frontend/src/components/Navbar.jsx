import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: '#1e293b', color: 'white' }}>
      <h3 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>
        🎓 Academic Assessment Portal
      </h3>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {token ? (
          <>
            <Link to={role === 'admin' ? '/admin-dashboard' : '/student-dashboard'} style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>
              My Dashboard
            </Link>
            <button onClick={handleLogout} style={{ backgroundColor: '#ef4444', padding: '8px 16px', fontSize: '14px' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;