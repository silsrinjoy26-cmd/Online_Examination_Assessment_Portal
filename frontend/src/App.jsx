import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import TakeExam from './pages/TakeExam';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
      {/* <div style={{ display: 'grid',gridTemplateRows: '1fr auto', minHeight: '100vh',width: '100vw',overflowX: 'hidden'}}>
        <div style={{ width: '100%', height: '100%' }}> */}
          <Routes>
            {/* Base Public Entry Route */}
            <Route path="/" element={<Home />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Role-Protected Dashboards */}
            <Route path="/admin-dashboard" element={
              <ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>
            } />
            <Route path="/student-dashboard" element={
              <ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>
            } />
            <Route path="/take-exam/:examId" element={
              <ProtectedRoute allowedRoles={['student']}><TakeExam /></ProtectedRoute>
            } />

            {/* Fallback redirect if user types an invalid URL */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;