import React, { useState, useEffect } from "react";
import wk from "../assets/img/wk.jpg"; // Mengimpor gambar
import { FiLogOut } from "react-icons/fi"; // Mengimpor icon logout
import { useNavigate } from "react-router-dom";
import TabelApp from "./pages/TabelApp";
import Riwayat from "./pages/Riwayat";
import Navbar from "../assets/Items/navbar";

function App() {
  const [activeTab, setActiveTab] = useState("tabel"); // State untuk menyimpan tampilan aktif
  const [showPopup, setShowPopup] = useState(false); // State untuk mengatur visibilitas popup
  const [userName, setUserName] = useState(""); // State untuk menyimpan nama pengguna
  const [userNIS, setUserNIS] = useState(""); // State untuk menyimpan nama pengguna
  const [userRayon, setUserRayon] = useState(""); // State untuk menyimpan nama pengguna
  const [userRombel, setUserRombel] = useState(""); // State untuk menyimpan nama pengguna
  const navigate = useNavigate(); // Menyiapkan navigasi

  useEffect(() => {
    // Mengambil nama pengguna dari localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
        const { name } = JSON.parse(storedUserData);
        const { rayon } = JSON.parse(storedUserData);
        const { nama_rombel } = JSON.parse(storedUserData);
        const { nis } = JSON.parse(storedUserData);
        setUserName(name);
        setUserRayon(rayon);
        setUserRombel(nama_rombel);
        setUserNIS(nis);
    }
}, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Mengubah tampilan aktif
    if (tab === "riwayat") {
      setShowPopup(true); // Tampilkan popup ketika tab riwayat diklik
    }
  };


  // Fungsi untuk tombol Back
  const handleBackClick = () => {
    navigate("/user/dashboard"); // Kembali ke halaman Dashboard2
  };

  return (
    <div className="w-full bg-[#FFFDF1] min-h-screen ">
    <Navbar/>
        <div className="flex items-center justify-between p-5 absolute">

          <button
            onClick={handleBackClick} // Mengatur klik tombol untuk navigasi
            className="flex items-center bg-[#A9B782] text-white py-2 px-4 rounded-[4px] space-x-2"
            style={{
              background:
                "linear-gradient(to bottom, #456F47, #69895C, #A9B782)",
            }}
          >
            <FiLogOut className="text-white" /> {/* Icon logout */}
            <span>Back</span>
          </button>
        </div>
      <div className="px-28 py-24 ">


        <h2 className="text-center text-2xl font-bold pt-3">
          Bukti App Zakat Infaq & Shadaqoh
        </h2>

        <div className="flex flex-col space-y-2  p-12 pt-10">
          <div className="text-left space-y-1">
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">NIS</p>
              <p className="font-pt-serrif font-semibold flex-1">: {userNIS}</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Nama</p>
              <p className="font-pt-serrif font-semibold flex-1">: {userName}</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Rombel</p>
              <p className="font-pt-serrif font-semibold flex-1">: {userRombel}</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Rayon</p>
              <p className="font-pt-serrif font-semibold flex-1">: {userRayon}</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6 ml-12">
          {["tabel", "riwayat"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded flex items-center space-x-2 ${
                activeTab === tab
                  ? "bg-[#A9B782] text-white opacity-100"
                  : "text-white opacity-70"
              }`}
              style={{
                background:
                  activeTab === tab
                    ? "linear-gradient(to bottom, #456F47, #69895C, #A9B782)"
                    : "linear-gradient(to bottom, #456F47, #69895C, #A9B782)",
              }}
              onClick={() => handleTabClick(tab)}
            >
              <span>
                {tab === "tabel"
                  ? "Tabel App"
                  : "Riwayat App"}
              </span>
            </button>
          ))}
        </div>

        {activeTab === "tabel" && <TabelApp />}
        {activeTab === "riwayat" && <Riwayat />}
      </div>
    </div>
  );
}

export default App;
