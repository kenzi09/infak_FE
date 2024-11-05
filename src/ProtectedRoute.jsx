// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Simpan role di localStorage setelah login

  // Cek apakah token dan role sesuai dengan role yang dibutuhkan
  if (!token || userRole !== requiredRole) {
    return <Navigate to="/" replace />; // Arahkan ke halaman login jika tidak memenuhi syarat
  }

  return children;
};

export default ProtectedRoute;
