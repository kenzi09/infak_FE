import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components
import Dashboard from './Users/Dashboard';
import Login from './Login/login';
import Pembayaran from './Pembayaran/pembayaran';
import Pembayaran2 from './Pembayaran2/Tagihan';
import Nunggak from './assets/Items/Menunggak';
import Sidebar from './PS/Sidebar/index'; // Sidebar
import TabelSiswa from './PS/Siswa'; // Halaman Siswa
import View from './PS/View'; // Halaman View
import Home from './PS/Home';
import SidebarAdmin from './Admin/Sidebar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/User/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/User/pembayaran" element={<Pembayaran />} />
        <Route path="/User/pembayaran2" element={<Pembayaran2 />} />
        <Route path="/User/nunggak" element={<Nunggak />} />
        <Route path="/PS" element={<Sidebar />}>
          <Route path='/PS/' element={<Home />} /> {/* Dashboard tampil di halaman utama */}
          <Route path="/PS/view" element={<View />} /> {/* Rute ke halaman View */}
          <Route path="/PS/pembayaran" element={<TabelSiswa />} /> {/* Rute ke halaman Siswa */}
        </Route>
          <Route path="/Admin/" element={<SidebarAdmin/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);