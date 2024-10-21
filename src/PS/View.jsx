import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const View = () => {
  const location = useLocation();
  const siswa = location.state?.siswa; // Dapatkan data siswa dari state
  const navigate = useNavigate(); // Gunakan navigate untuk berpindah halaman

  const [approvals, setApprovals] = useState([
    { id: 1, bulan: 'Januari', approved: true },
    { id: 2, bulan: 'Februari', approved: true },
    { id: 3, bulan: 'Maret', approved: true },
    { id: 3, bulan: 'April', approved: false },
    { id: 3, bulan: 'Mei', approved: false },
    { id: 3, bulan: 'Juni', approved: false },
    { id: 3, bulan: 'Juli', approved: false },
    { id: 3, bulan: 'Agustus', approved: false },
    { id: 3, bulan: 'September', approved: false },
    { id: 3, bulan: 'Oktober', approved: false },
    { id: 3, bulan: 'November', approved: false },
    { id: 3, bulan: 'Desember', approved: false },
  ]);

  const handleApprovalChange = (id) => {
    setApprovals((prevApprovals) =>
      prevApprovals.map((approval) =>
        approval.id === id
          ? { ...approval, approved: !approval.approved }
          : approval
      )
    );
  };

  return (
    <div className="container mx-auto mt-3">
      {/* Tombol kembali */}
      <button
        onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya (TabelSiswa)
        className="mb-9 px-4 pb-2 text-black hover:text-gray-500 transition-all duration-300"
      >
        Kembali
      </button>

      {/* Tampilkan nama siswa */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{siswa?.name}</h2>
      {/* <h3 className="text-xl font-semibold mb-6 text-gray-800">NIS: {siswa?.nis}</h3> */}

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">No.</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Bulan</th>
            <th className="px-6 py-3 text-center font-medium text-gray-600 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map((approval, index) => (
            <tr key={approval.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border-b">{index + 1}</td>
              <td className="px-6 py-4 border-b">{approval.bulan}</td>
              <td className="px-6 py-4 border-b text-center">
                <button
                  // onClick={() => handleApprovalChange(approval.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold focus:outline-none transition-all duration-300 ${
                    approval.approved
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-red-400 text-white hover:bg-red-600'
                  }`}
                >
                  {approval.approved ? 'Sudah Bayar ✔️' : 'Belum Bayar ❌'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
