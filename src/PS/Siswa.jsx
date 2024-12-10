import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TabelSiswa = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/siswa-ps", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response?.data || {};
        setUserData(data);
        console.log(data);
        sessionStorage.setItem("userData", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleView = (siswa) => {
    navigate("/ps/view", { state: { siswa } });
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = userData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-xl sm:text-3xl font-bold mb-6 text-gray-800">
        Approval Table
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <label className="text-gray-600">
          Tampilkan
          <select
            className="ml-2 p-1 border border-gray-300 rounded"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={7}>7</option>
            <option value={21}>21</option>
            <option value={42}>42</option>
            <option value={56}>56</option>
          </select>
          data per halaman
        </label>
      </div>

      {/* Menambahkan overflow-x-auto pada container tabel */}
      <div className="overflow-x-auto w-full max-w-full sm:rounded-lg border border-gray-300">
        <table className="min-w-max bg-white border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">
                No.
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">
                NIS
              </th>
              <th className="px-6 py-3 text-center font-medium text-gray-600 border-b">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((approval, index) => (
              <tr key={approval.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 border-b">
                  {startIndex + index + 1}
                </td>
                <td className="px-6 py-4 border-b">{approval.name}</td>
                <td className="px-6 py-4 border-b">{approval.nis}</td>
                <td className="px-6 py-4 border-b text-center">
                  <button
                    onClick={() => handleView(approval)}
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-between items-center mt-4 gap-4 sm:gap-6">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>

        <span className="text-gray-600 text-sm sm:text-base">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default TabelSiswa;
