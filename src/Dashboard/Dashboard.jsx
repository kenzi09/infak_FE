import React, { useState, useEffect } from "react";
import "./index.css";
import wk from "../assets/img/wk.jpg"; // Impor logo
import Navbar from "../assets/Items/navbar";
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
              <div style={{ width: 450, height: 430, marginTop: "-160px" }}>
                <div className="flex items-center justify-start pb-5">
                  <img src={wk} alt="Logo" className="logo-image w-12 h-12" />
                  <h5 className="font-semibold text-[12.77px] font-poppins text-black ml-3">
                    SMK WIKRAMA BOGOR
                  </h5>
                </div>
                <p className="text-5xl font-bold text-black pb-7">
                  Website Bukti Pembayaran Zakat Infaq & Shadaqoh
                </p>
                <p className="text-xl text-black pb-2">
                  Pengelola Beasiswa SMK Wikrama Bogor
                </p>

                <hr className="border border-black mb-7 w-[600px] mt-4" />

                <div className="bg-[#A9B782] bg-opacity-50 shadow-lg p-6 rounded-xl mt-6 w-[600px]">
                <p className="text-black text-center text-2xl font-arabic pb-4">
                    مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمُ فِي سَبِيلِ
                    اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي
                    كُلِّ سُنبُلَةٍ مِّئَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ
                    لِمَن يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ
                  </p>
                  <p className="text-black text-center italic">
                    "Perumpamaan orang yang menginfakkan hartanya di jalan
                    Allah adalah seperti sebutir biji yang menumbuhkan tujuh
                    bulir, di setiap bulir ada seratus biji. Allah melipatgandakan
                    (pahala) bagi siapa yang Dia kehendaki. Dan Allah Maha Luas,
                    Maha Mengetahui." (Q.S. Al-Baqarah: 265)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r via-transparent to-transparent rounded-full"></div>
              <div
                style={{
                  width: 561,
                  height: 561,
                }}
                className="flex justify-center items-center rounded-full bg-[#AFAFAF] bg-opacity-20 "
              >
                <img
                  src={masjid}
                  className="rounded-full object-cover"
                  style={{
                    width: 497,
                    height: 497,
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
