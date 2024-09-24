import React, { useState, useEffect } from "react";
import "./index.css";
import wk from "../assets/img/wk.jpg"; // Impor logo
import Navbar from "../assets/Items/navbar";
import gedungWk from "../assets/img/gedungWk.jpg";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Tunggu 500ms sebelum animasi dimulai
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col bg-image font-pt">
        <Navbar />
        {/* Bagian Welcome Message */}
        <div className={`welcome-section text-center pt-6 md:pt-9 transition-transform duration-[2000ms] ease-in-out ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h4 className="text-lg md:text-2xl">
            <span>Selamat datang, </span>
            <span className="font-bold text-gray-800">Kenzi Badrika!</span>
          </h4>
          <p className="text-sm md:text-xl text-gray-500">Cibedug 3 | PPLG XII-1 | 12209077</p>
        </div>

        {/* Bagian Utama */}
        <main className="flex-grow flex flex-col items-center justify-center md:mt-6 px-4 md:px-0">
          <div className="flex flex-col items-center md:flex-row justify-around w-full h-full pb-7">
            
            {/* Bagian Teks */}
            <div className={`flex flex-col justify-center items-center text-center transition-transform duration-[2000ms] ease-in-out ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
              <div className="w-full md:w-[450px] h-auto md:h-[430px] p-5 md:text-left text-center">
                <div className="flex items-center justify-center md:justify-start pb-5">
                  <img src={wk} alt="Logo" className="logo-image w-12 h-12" />
                  <h5 className="font-semibold text-xs font-poppins text-black ml-3">
                    SMK WIKRAMA BOGOR
                  </h5>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-black pb-5">
                  Website Bukti Pembayaran Zakat Infaq & Shadaqoh
                </p>
                <p className="text-base md:text-xl text-black">
                  Pengelola Beasiswa SMK Wikrama Bogor
                </p>
              </div>
            </div>

            {/* Bagian Gambar */}
            <div className={`flex justify-center items-center relative transition-transform duration-[2000ms] ease-in-out mt-6 md:mt-0 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A9B782B3] via-transparent to-transparent rounded-full"></div>
              <div
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '300px', // Sesuaikan ukuran gambar di mobile
                  maxHeight: '300px'
                }}
                className="flex justify-center items-center rounded-full bg-[#A9B782] bg-opacity-50"
              >
                <img
                  src={gedungWk}
                  className="rounded-full"
                  style={{
                    width: '100%',
                    height: 'auto',
                    transform: isLoaded ? "translateX(0)" : "translateX(100px)",
                    opacity: isLoaded ? 1 : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Dashboard2 />
      <Dashboard3 />
    </>
  );
}

export default Dashboard;
