// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role"); // Simpan role di localStorage setelah login

  // Cek apakah token dan role sesuai dengan role yang dibutuhkan
  if (!token || userRole !== requiredRole) {
    return <Navigate to="/" replace />; // Arahkan ke halaman login jika tidak memenuhi syarat
  }

  return children;
};

export default ProtectedRoute;
