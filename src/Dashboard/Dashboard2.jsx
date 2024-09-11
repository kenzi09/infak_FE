import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate dari React Router
import coin from "../assets/img/coin.jpg";
import bg from "../assets/img/bg.png"; // Pastikan nama file dan path-nya benar
import { TiCreditCard } from "react-icons/ti";

const Dashboard2 = () => {
  const navigate = useNavigate(); // Membuat navigasi

  const cardRef = useRef(null); // Untuk referensi pada Card Section
  const imageRef = useRef(null); // Untuk referensi pada Image Section
  const [isCardVisible, setIsCardVisible] = useState(false); // State untuk Card Section
  const [isImageVisible, setIsImageVisible] = useState(false); // State untuk Image Section

  // Fungsi untuk berpindah ke halaman pembayaran
  const handleCardClick = () => {
    navigate("/pembayaran");
  };

  useEffect(() => {
    // Intersection Observer untuk mendeteksi Card Section
    const observerCard = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCardVisible(true); // Aktifkan animasi saat masuk ke viewport
          } else {
            setIsCardVisible(false); // Kembalikan ke posisi semula saat keluar dari viewport
          }
        });
      },
      { threshold: 0.5 }
    );

    // Intersection Observer untuk mendeteksi Image Section
    const observerImage = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true); // Aktifkan animasi saat masuk ke viewport
          } else {
            setIsImageVisible(false); // Kembalikan ke posisi semula saat keluar dari viewport
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observerCard.observe(cardRef.current);
    }

    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }

    // Cleanup observer saat komponen di-unmount
    return () => {
      if (cardRef.current) {
        observerCard.unobserve(cardRef.current);
      }
      if (imageRef.current) {
        observerImage.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#faf8ef] flex flex-col items-center justify-center px-10"
      style={{
        fontFamily: "'PT Serif', serif",
      }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
        Zakat Infaq dan Shadaqoh
      </h1>
      <div className="flex justify-between md:flex-row items-center">
        {/* Card Section */}
        <div
          ref={cardRef}
          onClick={handleCardClick} // Menambahkan onClick untuk navigasi
          className={`relative bg-[#A9B782] w-[473px] h-[281px] rounded-lg shadow-lg flex flex-col justify-center items-center p-4 my-2 transition-transform duration-[1000ms] ease-in-out transform ${isCardVisible ? 'translate-x-0' : '-translate-x-20'} hover:scale-105`}
          style={{ borderRadius: "20px", margin: "60px" }}
        >
          {/* Bagian bawah dengan background image */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/4"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              borderRadius: "0 0 20px 20px",
            }}
          ></div>
          {/* Bagian atas dengan background color */}
          <div
            className="absolute top-0 left-0 w-full h-3/4 bg-[#A9B782] rounded-t-lg flex flex-col shadow-lg justify-center items-center"
            style={{ borderRadius: "20px 20px 0 0" }}
          >
            <div className="flex items-center gap-2 text-white pb-4">
              {/* Icon with background */}
              <div className="bg-white p-2 rounded-full">
                <TiCreditCard className="text-black text-xl w-[30px] h-[30px]" />
              </div>
              <div className="w-[270px] mt-9">
                <p className="text-xl font-semibold mb-2">Zakat Infaq & Shadaqoh</p>
                <p className="text-[15px] text-white">
                  Tagihan, Riwayat Pembayaran, dan Kartu Bayaran
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div
          ref={imageRef}
          className={`w-[473px] h-[281px] rounded-lg shadow-lg overflow-hidden my-2 transition-transform duration-[1000ms] ease-in-out transform ${isImageVisible ? 'translate-x-0' : 'translate-x-20'}`}
          style={{ borderRadius: "20px", margin: "60px" }}
        >
          <img
            src={coin}
            alt="Zakat Image"
            className="w-full h-full object-cover"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
