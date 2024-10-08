import React, { useState, useEffect } from "react";
import "./index.css";
import wk from "../assets/img/wk.jpg"; // Impor logo
import Navbar from "../assets/Items/navbar";
// import gedungWk from "../assets/img/gedungWk.jpg";
import masjid from "../assets/img/masjid.jpg";
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
              {/* Tambahkan margin-top negatif untuk mengangkat teks */}
              <div style={{ width: 450, height: 430, marginTop: "-160px" }}>
                <div className="flex items-center justify-start pb-5">
                  <img src={wk} alt="Logo" className="logo-image w-12 h-12" />
                  <h5 className="font-semibold text-xs font-poppins text-black ml-3">
                    SMK WIKRAMA BOGOR
                  </h5>
                </div>
                <p className="text-5xl font-bold text-black pb-7">
                  Website Bukti Pembayaran Zakat Infaq & Shadaqoh
                </p>
                <p className="text-xl text-black pb-2">
                  Pengelola Beasiswa SMK Wikrama Bogor
                </p>
                {/* Garis panjang di atas */}
                <hr className="border border-black mb-7 w-[600px] mt-4" />

                {/* Menambahkan div untuk ayat Al-Quran beserta artinya */}
                <div className="bg-black shadow-lg p-6 rounded-md mt-6 w-[600px] bg-opacity-5">
                  <p className="text-black text-center text-2xl font-arabic pb-4">
                    لَآ إِكْرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ
                    ٱلْغَيِّۚ فَمَن يَكْفُرْ بِٱلطَّٰغُوتِ وَيُؤْمِنۢ بِٱللَّهِ
                    فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا ٱنفِصَامَ
                    لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ
                  </p>
                  <p className="text-black text-center italic">
                    "Tidak ada paksaan untuk (memasuki) agama (Islam);
                    sesungguhnya telah jelas jalan yang benar daripada jalan
                    yang sesat. Karena itu, barang siapa yang ingkar kepada
                    thaghut dan beriman kepada Allah, maka sesungguhnya ia telah
                    berpegang teguh pada tali yang sangat kuat yang tidak akan
                    putus. Allah Maha Mendengar, Maha
                    Mengetahui."(Q.s.Al-Baqarah:256)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r  via-transparent to-transparent rounded-full"></div>
              <div
                style={{
                  width: 484,
                  height: 484,
                }}
                className="flex justify-center items-center rounded-full bg-[#AFAFAF] bg-opacity-20 "
              >
                <img
                  src={masjid}
                  className="rounded-full object-cover"
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
