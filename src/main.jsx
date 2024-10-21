import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/login';
import Pembayaran from './Pembayaran/pembayaran';
import Nunggak from './assets/Items/Menunggak';
import Sidebar from './PS/Sidebar/index'; // Sidebar
import TabelSiswa from './PS/Siswa'; // Halaman Siswa
import View from './PS/View'; // Halaman View
import Home from './PS/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/nunggak" element={<Nunggak />} />
        <Route path="/PS" element={<Sidebar />}>
          <Route path='/PS/' element={<Home />} /> {/* Dashboard tampil di halaman utama */}
          <Route path="/PS/view" element={<View />} /> {/* Rute ke halaman View */}
          <Route path="/PS/pembayaran" element={<TabelSiswa />} /> {/* Rute ke halaman Siswa */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);