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
    // Set timeout untuk mengontrol kapan animasi dimulai
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Tunggu 500ms sebelum animasi dimulai
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col bg-image font-pt">
        <Navbar />
        <div className={`welcome-section text-center pt-9 transition-transform duration-[2000ms] ease-in-out ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h4 className="" style={{ fontSize: 28 }}>
            <span>Selamat datang, </span>
            <span className="font-bold text-gray-800">Nama Pengguna!</span>
          </h4>
          <p className="text-xl text-gray-500">Rayon | Rombel | NIS</p>
        </div>
        <main className="flex-grow flex flex-col items-center justify-center">
          <div className="justify-around flex w-full h-3/4 pb-7">
            <div className={`flex justify-center items-center transition-transform duration-[2000ms] ease-in-out ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
              <div style={{ width: 450, height: 430 }}>
                <div className="flex items-center justify-start pb-5">
                  <img src={wk} alt="Logo" className="logo-image w-12 h-12" />
                  <h5 className="font-semibold text-xs font-poppins text-black ml-3">
                    SMK WIKRAMA BOGOR
                  </h5>
                </div>
                <p className="text-5xl font-bold text-black pb-5">
                  Website Bukti Pembayaran Zakat Infaq & Shadaqoh
                </p>
                <p className="text-xl text-black ">
                  Pengelola Beasiswa SMK Wikrama Bogor
                </p>
              </div>
            </div>
            <div className={`flex justify-center items-center relative transition-transform duration-[2000ms] ease-in-out ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A9B782B3] via-transparent to-transparent rounded-full"></div>
              <div
                style={{
                  width: 484,
                  height: 484,
                }}
                className="flex justify-center items-center rounded-full bg-[#A9B782] bg-opacity-50"
              >
                <img
                  src={gedungWk}
                  className="rounded-full"
                  style={{
                    width: 430,
                    height: 430,
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
