import React, { useState } from "react";
import bg from "../assets/img/bg.png";
import StatusBlmBayar from "../assets/Items/Status/StatusBlmBayar";
import Menunggak from "../assets/Items/Status/Menunggak";
import wk from "../assets/img/wk.jpg"; // Mengimpor gambar

function Tagihan() {
  const [selectedItems, setSelectedItems] = useState([]);

  const paymentItems = [
    { id: 1, name: "Zakat Infaq dan Shadaqoh Bulan Juli 2024", amount: 50000 },
    {
      id: 2,
      name: "Zakat Infaq dan Shadaqoh Bulan Agustus 2024",
      amount: 60000,
    },
    {
      id: 3,
      name: "Zakat Infaq dan Shadaqoh Bulan September 2024",
      amount: 70000,
    },
    // Add more items as needed
  ];

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  return (
    <div className="w-full bg-[#FFFDF1] px-28 py-12 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img src={wk} alt="Logo" className="w-[71px] h-[71px]" />
          <h1 className="text-xl font-bold poppins">
            PENGELOLA BEASISWA
            <br />
            SMK WIKRAMA BOGOR
          </h1>
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold pt-3">
        Total Tagihan Zakat Infaq & Shadaqoh
      </h2>

      <div className="flex flex-col space-y-2 p-12 pt-10">
        <div className="text-left space-y-1">
          <div className="flex">
            <p className="font-pt-serrif font-semibold w-60">NIS</p>
            <p className="font-pt-serrif font-semibold flex-1">: 12209077</p>
          </div>
          <div className="flex">
            <p className="font-pt-serrif font-semibold w-60">Nama</p>
            <p className="font-pt-serrif font-semibold flex-1">
              : Kenzi Badrika
            </p>
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
            <p className="font-pt-serrif font-semibold w-60">
              Pembimbing Rayon
            </p>
            <p className="font-pt-serrif font-semibold flex-1">
              : Muslih, S.Kom
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="flex items-center bg-[#A9B782] text-white py-2 px-4 rounded-[4px] space-x-2"
          style={{
            background: "linear-gradient(to bottom, #456F47, #69895C, #A9B782)",
          }}
        >
          <span>Bayar Sekarang</span>
        </button>
      </div>

      <hr className="my-4 border-t-2 border-gray-300" />

      {paymentItems.map((item) => (
        <div
          key={item.id}
          className={`flex items-center ml-12 mr-12 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
            selectedItems.includes(item.id)
              ? "opacity-100 scale-105"
              : "opacity-80 scale-100"
          }`}
          onClick={() => handleSelectItem(item.id)} // Tambahkan fungsi untuk memilih item
        >
          {/* Custom checkbox */}
          <div
            onClick={() => handleSelectItem(item.id)} // Add click handler to the checkbox
            className={`flex items-center justify-center cursor-pointer mr-4 w-7 h-7 border-2 rounded ${
              selectedItems.includes(item.id)
                ? "border-transparent"
                : "border-black"
            }`}
            style={{
              backgroundColor: selectedItems.includes(item.id)
                ? "#A9B782"
                : "transparent",
            }}
          >
            {selectedItems.includes(item.id) && (
              <span className="text-white font-bold">✓</span>
            )}
          </div>

          {/* Div utama yang berisi item */}
          <div
            className="p-2 rounded-[5px] flex justify-between h-[120px] items-center shadow-xl w-full"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col font-['PT_Serif'] ml-4">
              <div className="flex space-x-2 mb-1">
                <div className="mr-2">
                  <StatusBlmBayar />
                </div>
                <Menunggak />
              </div>
              <p className="font-bold text-black text-sm">{item.name}</p>
              <p className="text-gray-700 text-xs">
                No. Rekening: <span className="font-bold">1078742696</span>
              </p>
              <p className="text-gray-700 text-xs">
                Nama Rekening:{" "}
                <span className="font-bold">SMK Wikrama Bogor</span>
              </p>
              <p className="text-gray-700 text-xs">
                Bank:{" "}
                <span className="font-bold">Bank Syariah Indonesia (BSI)</span>
              </p>
            </div>

            <div className="flex justify-center w-[150px] h-[40px]">
              <span className="bg-[#A9B782] text-white py-1 px-4 rounded-[10px] w-[150px] h-[40px] text-sm flex items-center justify-center">
                Rp{item.amount.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tagihan;
