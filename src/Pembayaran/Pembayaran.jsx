import React, { useState } from "react";
import wk from "../assets/img/wk.jpg"; // Mengimpor gambar
import { FiLogOut } from "react-icons/fi"; // Mengimpor icon logout
import TabelApp from "./pages/TabelApp";
import Tagihan from "./pages/Tagihan";
import Riwayat from "./pages/Riwayat";
import Popup from "../assets/Items/Popup";

function App() {
  const [activeTab, setActiveTab] = useState("tabel"); // State untuk menyimpan tampilan aktif
  const [showPopup, setShowPopup] = useState(false); // State untuk mengatur visibilitas popup

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Mengubah tampilan aktif
    if (tab === "riwayat") {
      setShowPopup(true); // Tampilkan popup ketika tab riwayat diklik
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Menutup popup
  };

  return (
    <>
      <div className="w-full bg-[#FFFDF1] px-28 py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img src={wk} alt="Logo" className="w-[71px] h-[71px]" />
            <h1 className="text-xl font-bold poppins">
              PENGELOLA BEASISWA
              <br />
              SMK WIKRAMA BOGOR
            </h1>
          </div>

          <button
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

        <hr className="my-4 border-t-2 border-gray-300" />

        <h2 className="text-center text-2xl font-bold pt-3">
          Bukti App Zakat Infaq & Shadaqoh
        </h2>

        <div className="flex flex-col space-y-2  p-12 pt-10">
          <div className="text-left space-y-1">
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">NIS</p>
              <p className="font-pt-serrif font-semibold flex-1">: 12209077</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Nama</p>
              <p className="font-pt-serrif font-semibold flex-1">: Kenzi Badrika</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Rombel</p>
              <p className="font-pt-serrif font-semibold flex-1">: PPLG XII-1</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Rayon</p>
              <p className="font-pt-serrif font-semibold flex-1">: Cibedug 3</p>
            </div>
            <div className="flex">
              <p className="font-pt-serrif font-semibold w-60">Pembimbing Rayon</p>
              <p className="font-pt-serrif font-semibold flex-1">: Muslih, S.Kom</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6 ml-12">
          {["tabel", "tagihan", "riwayat"].map((tab) => (
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
                  : tab === "tagihan"
                  ? "Total Tagihan"
                  : "Riwayat App"}
              </span>
            </button>
          ))}
        </div>

        {activeTab === "tabel" && <TabelApp />}

        {activeTab === "tagihan" && <Tagihan />}

        {activeTab === "riwayat" && <Riwayat />}
      </div>
    </>
  );
}

export default App;
