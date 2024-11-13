// ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role"); // Simpan role di sessionStorage setelah login
  const location = useLocation();

  // Jika pengguna mengakses halaman login dan sudah ada token, redirect ke dashboard
  if (location.pathname === "/login" && token || location.pathname === "/" && token) {
    if (userRole === "Admin") 
    {
      return <Navigate to="/Admin/" replace />;
    } else if (userRole === "Siswa")
    {
      return <Navigate to="/User/dashboard" replace />;
    } else if (userRole === "PS")
    {
      return <Navigate to="/PS/" replace />;
    }
  }

  // Cek apakah token dan role sesuai dengan role yang dibutuhkan
  if (!token || userRole !== requiredRole) {
    return <Navigate to="/" replace />; // Arahkan ke halaman login jika tidak memenuhi syarat
  }

  return children;
};

export default ProtectedRoute;
