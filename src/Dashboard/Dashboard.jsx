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
        <div className="welcome-section text-center pt-9">
          <h4 className="" style={{ fontSize: 28 }}>
            <span>Selamat datang, </span>
            <span className="font-bold text-gray-800">Nama Pengguna!</span>
          </h4>
          <p className="text-xl text-gray-500">Rayon | Rombel | NIS</p>
        </div>
        <main className="flex-grow flex flex-col items-center justify-center">
          <div className="justify-around flex w-full h-3/4 pb-7">
            <div className="flex justify-center items-center">
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
                <p className="text-xl text-black pb-3">
                  Pengelola Beasiswa SMK Wikrama Bogor
                </p>
                {/* Menambahkan Surah Al-Baqarah ayat 267 beserta artinya */}
                <div className="text-sm text-gray-600 mt-4">
                  <p className="font-bold text-2xl text-black">Surah Al-Baqarah Ayat 267</p>
                  <p className="text-black text-right text-2xl font-arabic pb-4">
                    يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّآ
                    أَخْرَجْنَا لَكُم مِّنَ ٱلْأَرْضِ وَلَا تَيَمَّمُوا ٱلْخَبِيثَ مِنْهُ تُنفِقُونَ وَلَسْتُم
                    بِـَٔاخِذِيهِ إِلَّآ أَن تُغْمِضُوا فِيهِ وَٱعْلَمُوٓا أَنَّ ٱللَّهَ غَنِىٌّ حَمِيدٌ
                  </p>
                  <p>
                    "Wahai orang-orang yang beriman! Infakkanlah (di jalan Allah) sebagian dari hasil usahamu
                    yang baik-baik dan sebagian dari apa yang Kami keluarkan dari bumi untukmu. Dan janganlah kamu
                    memilih yang buruk-buruk lalu kamu infakkan, padahal kamu sendiri tidak mau mengambilnya melainkan
                    dengan memicingkan mata terhadapnya. Dan ketahuilah bahwa Allah Mahakaya, Maha Terpuji."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
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
