import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/img/bg.png";
import StatusBlmBayar from "../../assets/Items/Status/StatusBlmBayar";
import Menunggak from "../../assets/Items/Status/Menunggak";

function Tagihan() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const paymentItems = [
    { id: 1, bulan: "Juli", amount: 50000 },
    { id: 2, bulan: "Agustus", amount: 60000 },
    { id: 3, bulan: "September", amount: 70000 },
  ];

  const handleBayarSekarang = () => {
    // Ambil nama bulan yang dipilih dari paymentItems berdasarkan selectedItems
    const selectedMonths = paymentItems
      .filter(item => selectedItems.includes(item.id))
      .map(item => item.bulan)
      .join(", "); // Gabungkan bulan menjadi satu string
  
    navigate("/User/pembayaran2", { state: { selectedMonths } });
  };
  

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };


  return (
    <div className="w-full bg-[#FFFDF1]">

{selectedItems.length > 0 && (
  <div className="flex justify-end pt-2">

        <div className="absolute ">
          <button
            onClick={handleBayarSekarang}
            className="flex items-center bg-[#A9B782] text-white py-2 px-4 rounded-[4px]"
            style={{
              background: "linear-gradient(to bottom, #456F47, #69895C, #A9B782)",
            }}
          >
            <span>Bayar Sekarang</span>
          </button>
        </div>
  </div>
      )}
      
      <div className="flex justify-end mt-12 ">
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
          onClick={() => handleSelectItem(item.id)}
        >
          <div
            onClick={() => handleSelectItem(item.id)}
            className={`flex items-center justify-center cursor-pointer mr-4 w-7 h-7 border-2 rounded ${
              selectedItems.includes(item.id) ? "border-transparent" : "border-black"
            }`}
            style={{
              backgroundColor: selectedItems.includes(item.id) ? "#A9B782" : "transparent",
            }}
          >
            {selectedItems.includes(item.id) && (
              <span className="text-white font-bold">✓</span>
            )}
          </div>

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
              <p className="font-bold text-black text-sm">Zakat Infaq dan Shadaqoh Bulan {item.bulan} 2024</p>
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
