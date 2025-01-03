import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/img/bg.png";
import StatusBlmBayar from "../../assets/Items/Status/StatusBlmBayar";
import Menunggak from "../../assets/Items/Status/Menunggak";
import axios from "axios";

function Tagihan() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const [userNominal, setUserNominal] = useState("");
  const [paymentItems, setPaymentItems] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchBulan = async () => {
    try {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      const id = userData?.id;
  
      if (!id) {
        console.error("ID siswa tidak ditemukan.");
        return;
      }
  
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`http://127.0.0.1:8000/api/bulan/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Respon API:", response.data);
  
      // Pastikan respons berupa array, lalu set ke state
      if (Array.isArray(response.data.data)) {
        setPaymentItems(response.data.data);
        setDataCount(response.data.count);
        // console.log(dataCount);
      } else {
        console.error("Data tidak valid:", response.data);
        setPaymentItems([]); // Fallback jika respons tidak valid
      }
    } catch (error) {
      console.error("Error fetching bulan:", error.response?.data || error);
      setPaymentItems([]); // Fallback jika ada error
    }
  };
  
  
  
  useEffect(() => {
    fetchBulan();
  }, []);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      const { nominal } = JSON.parse(storedUserData);
      setUserNominal(nominal);
    }
  }, []);

  // Fungsi untuk format nominal ke dalam bentuk Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };


  const handleBayarSekarang = async () => {
    
  };
  

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  if (dataCount === 12) {
    return(
    <div className="w-full bg-[#FFFDF1]">
      <div className="flex justify-end mt-12 "/>
      <hr className="my-4 border-t-2 border-gray-300" />
      <h1>bulan suda lunas</h1>
    </div>
    );
  }

  return (
    <div className="w-full bg-[#FFFDF1]">

      {selectedItems.length > 0 && (
        <div className="flex justify-end">

              <div className="absolute top-[338px]">
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
            
            <div className="flex justify-end mt-10 "/>
            <hr className="my-4 border-t-2 border-gray-300" />

            
            {Array.isArray(paymentItems) && paymentItems.length > 0 ? (
            paymentItems.map((item) => (
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
                    <p className="font-bold text-black text-sm">Zakat Infaq dan Shadaqoh Bulan {item.nama_bulan} 2024</p>
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
                    {formatRupiah(userNominal)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (<p>Tidak ada bulan tersedia.</p>)
          }
      </div>
  );
}

export default Tagihan;