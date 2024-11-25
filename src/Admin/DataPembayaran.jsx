import React, { useState, useEffect } from "react";
import axios from "axios"; 

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedDate, setSelectedDate] = useState(""); 
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 
  const [selectedDropdown, setSelectedDropdown] = useState(""); 
  const [rayons, setRayons] = useState([]); 

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/siswa", {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        console.log("Respon API:", response.data?.data || []);
        setData(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    const fetchRayons = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/rayon");
        console.log("Rayons Response:", response.data); 

        const rayonData = Array.isArray(response.data) 
          ? response.data.map(item => item.rayon) 
          : response.data.data.map(item => item.rayon);

        setRayons(rayonData);
      } catch (error) {
        console.error("Error fetching rayons:", error);
        setError("Error fetching rayons");
      }
    };

    fetchData();
    fetchRayons();
  }, []); 

  const searchStudents = async (searchTerm) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/search/siswa", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { key: searchTerm },
      });
      setData(response.data); 
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results");
    }
  };

  const handleDetailClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const handleCheckboxChange = (month) => {
    setSelectedMonths((prev) => ({
      ...prev,
      [month]: !prev[month],
    }));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value) {
      searchStudents(value);
    } else {
      fetchData(); 
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedDropdown(e.target.value);
    console.log("Selected Rayon:", e.target.value);  // Debugging selected rayon
  };

  // Filter data based on search term, selected rayon, and date
  const filteredData = data.filter((item) => {
    const matchesDate = selectedDate ? item.tanggal === selectedDate : true;
    const matchesRayon = selectedDropdown ? item.rayon_id.rayon === selectedDropdown : true;
    return matchesDate && matchesRayon;
  });

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Data Siswa</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4 flex justify-between">
        <input
          type="text"
          className="border px-4 py-2 rounded-lg w-1/3"
          placeholder="Cari Nama atau NIS"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="border px-4 py-2 rounded-lg w-1/4 ml-4"
          value={selectedDropdown}
          onChange={handleDropdownChange}  // Gunakan event handler
        >
          <option value="">Pilih Rayon</option>
          {rayons.length > 0 ? (
            rayons.map((rayon, index) => (
              <option key={index} value={rayon}>{rayon}</option>
            ))
          ) : (
            <option value="">Loading...</option>  // Tampilkan "Loading" jika data belum ada
          )}
        </select>
        <input
          type="date"
          className="border px-4 py-2 rounded-lg"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Nama</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">NIS</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Rayon</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Rombel</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Tanggal</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 border-b">Detail</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border-b">{item.name}</td>
              <td className="px-6 py-4 border-b">{item.nis}</td>
              <td className="px-6 py-4 border-b">{item.rayon}</td>
              <td className="px-6 py-4 border-b">{item.nama_rombel}</td>
              <td className="px-6 py-4 border-b">{item.tanggal}</td>
              <td className="px-6 py-4 border-b">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleDetailClick(item)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;