import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/login';
import Pembayaran from './Pembayaran/pembayaran';
import Nunggak from './assets/Items/Menunggak';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/nunggak" element={<Nunggak />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);