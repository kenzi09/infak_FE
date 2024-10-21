import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const TabelSiswa = () => {
  const [approvals, setApprovals] = useState([
    { id: 1, name: 'John Doe', nis: 12209077, approved: false },
    { id: 2, name: 'Jane Smith', nis: 12209078, approved: false },
    { id: 3, name: 'Mark Miller', nis: 12209079, approved: false },
  ]);

  const navigate = useNavigate();

  const handleView = (siswa) => {
    navigate('/ps/view', { state: { siswa } }); // Kirim data siswa menggunakan state
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Approval Table</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">No.</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Name</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">NIS</th>
            <th className="px-6 py-3 text-center font-medium text-gray-600 border-b">View</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map((approval, index) => (
            <tr key={approval.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border-b">{index + 1}</td>
              <td className="px-6 py-4 border-b">{approval.name}</td>
              <td className="px-6 py-4 border-b">{approval.nis}</td>
              <td className="px-6 py-4 border-b text-center">
                <button
                  onClick={() => handleView(approval)} // Kirim data siswa yang diklik
                  className="px-4 py-2 rounded-lg text-sm font-semibold focus:outline-none transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelSiswa;
