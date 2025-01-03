import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import wk from "../assets/img/wk.jpg";
import Navbar from "../assets/Items/navbar";
import masjid from "../assets/img/masjid.jpg";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import axios from "axios";
import "../loading.css";

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState(() => {
    const savedData = sessionStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const navigate = useNavigate();

  // Simulasi Loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      console.log("Token tidak ditemukan, arahkan ke halaman login.");
      navigate("/login");
      return;
    }

    // Jika userData tidak ada, ambil data dari API
    if (!userData) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/siswa", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = response.data?.data || {};

          console.log("Data pengguna:", data); // Debug log semua data pengguna

          // Validasi data no_tlp dan nominal
          if (!data.no_tlp || !data.nominal) {
            console.warn("Data tidak valid, arahkan ke halaman verifikasi.");
            navigate("/User/Verifikasi");
          } else {
            // Simpan data pengguna jika valid
            setUserData(data);
            sessionStorage.setItem("userData", JSON.stringify(data));
          }
        } catch (error) {
          console.error("Gagal mengambil data pengguna:", error);
          navigate("/login");
        }
      };

      fetchUserData();
    } else {
      // Validasi jika userData sudah ada di sessionStorage
      if (!userData.no_tlp || !userData.nominal) {
        console.warn("Data tidak valid dari sessionStorage, arahkan ke halaman verifikasi.");
        navigate("/User/Verifikasi");
      }
    }
  }, [userData, navigate]);

  if (!userData || !isLoaded) {
    return (
      <div className="max-h-screen bg-[#FFFDF1]">
        <div className="p-4 absolute">
          <img src={wk} alt="Logo" className="logo-image w-12 h-12 " />
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="loading">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col bg-image font-pt">
        <Navbar />
        <div className="welcome-section text-center pt-9">
          <p style={{ fontSize: 25 }}>
            <span>Selamat datang, </span>
            <span className="font-bold text-gray-800">{userData.name}</span>
          </p>
          <p className="text-[18px] text-gray-500">
            {userData.rayon_id?.rayon || "Rayon Tidak Ditemukan"} |{" "}
            {userData.nama_rombel || "Rombel Tidak Ditemukan"} | {userData.nis || "NIS Tidak Tersedia"}
          </p>
        </div>
        <main className="flex-grow flex flex-col items-center justify-center">
          <div className="justify-around flex w-full h-3/4 pb-7">
            <div className="flex justify-center items-center">
              <div style={{ width: 450, height: 430, marginTop: "-100px" }}>
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
                <hr className="border border-black mb-7 w-[488px] mt-4" />
                <div className="bg-black shadow-lg p-6 rounded-md mt-6 w-[488px] bg-opacity-5">
                  <p className="text-black text-center text-[14px] font-arabic pb-4 italic">
                    لَآ إِكْرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ
                    ٱلْغَيِّۚ فَمَن يَكْفُرْ بِٱلطَّٰغُوتِ وَيُؤْمِنۢ
                    بِٱللَّهِ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا
                    ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ
                  </p>
                  <p className="text-black text-center italic text-[13px]">
                    "Tidak ada paksaan untuk (memasuki) agama (Islam);
                    sesungguhnya telah jelas jalan yang benar daripada jalan
                    yang sesat. Karena itu, barang siapa yang ingkar kepada
                    thaghut dan beriman kepada Allah, maka sesungguhnya ia telah
                    berpegang teguh pada tali yang sangat kuat yang tidak akan
                    putus. Allah Maha Mendengar, Maha Mengetahui."
                    (Q.s.Al-Baqarah:256)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r via-transparent to-transparent rounded-full"></div>
              <div
                style={{ width: 561, height: 561 }}
                className="flex justify-center items-center rounded-full bg-[#AFAFAF] bg-opacity-20 "
              >
                <img
                  src={masjid}
                  className="rounded-full object-cover"
                  style={{ width: 497, height: 497 }}
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
