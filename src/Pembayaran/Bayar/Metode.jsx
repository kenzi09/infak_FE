import React, { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import bg from "../../assets/img/bg3.jpg";
import QR from "../../assets/img/QR.png";
import BNI from "../../assets/img/BNI.jpg";
import Navbar from "../../assets/Items/navbar";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation

const PembayaranPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bayarRef = useRef(null);

  // Ambil data bulan yang dipilih dari tagihan.jsx
  const selectedMonths = location.state?.selectedMonths || "Bulan belum dipilih";

  // Variabel dan fungsi lainnya tetap
  const [selectedZakat, setSelectedZakat] = useState('Pilih Jenis Zakat');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isZakatOpen, setIsZakatOpen] = useState(false);

  const zakatOptions = ['Infaq dan Shadaqoh', 'Zakat Mall'];

  const handlePaymentSelect = (option) => {
    setSelectedPayment(option);
    setTimeout(() => {
      bayarRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const handleZakatSelect = (option) => {
    setSelectedZakat(option);
    setIsZakatOpen(false);
  };

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = QR;
    link.download = "QRIS.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#FFFDF1] pt-12" style={{ fontFamily: "'PT Serif', serif" }}>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <section className="p-8 rounded-lg shadow-md mb-8" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-10">Pembayaran</h2>

          <div className="flex space-x-4 mb-10">
            <div className="relative w-1/2">
              {/* Dropdown Jenis Zakat */}
              <button
                className="w-full p-3 border border-[#A9B782] rounded-xl bg-[#A9B782] text-white flex justify-between items-center focus:outline-none hover:bg-[#8DA06E] transition-colors duration-200"
                onClick={() => setIsZakatOpen(!isZakatOpen)}
              >
                <span>{selectedZakat}</span>
                <FaChevronDown className="text-white h-5 w-5" />
              </button>
              {isZakatOpen && (
                <ul className="absolute z-10 w-full bg-white border border-[#A9B782] rounded-lg shadow-lg mt-1">
                  {zakatOptions.map((option) => (
                    <li key={option} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleZakatSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative w-1/2">
              {/* Field Bulan yang tidak bisa diisi */}
              <input
                type="text"
                value={selectedMonths}
                readOnly
                className="w-full p-3 border border-[#A9B782] rounded-xl bg-[#A9B782] text-white"
              />
            </div>
          </div>
        </section>

        <section className="p-8 rounded-2xl shadow-lg mb-8" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparan
        }}>
          <h3 className="text-xl font-semibold mb-6">Pilih Metode Pembayaran</h3>

          {/* Pilihan Pembayaran */}
          <div className="space-y-6">
            <div
              className={`p-6 rounded-lg shadow-md cursor-pointer ${selectedPayment === 'QRIS' ? 'bg-[#A9B782]' : 'bg-transparent'}`}
              onClick={() => handlePaymentSelect('QRIS')}
            >
              <div className="flex items-center space-x-4">
                <img src={QR} alt="QRIS Logo" className="h-10 w-auto" />
                <div>
                  <p className="text-lg font-semibold">QRIS Scan</p>
                  {selectedPayment === 'QRIS' && (
                    <>
                      <p className="text-gray-600 mt-2">Scan kode QR untuk pembayaran</p>
                      <button
                        onClick={downloadQRCode}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                      >
                        Unduh QR Code
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-lg shadow-md cursor-pointer ${selectedPayment === 'Bank BNI' ? 'bg-[#A9B782]' : 'bg-transparent'}`}
              onClick={() => handlePaymentSelect('Bank BNI')}
            >
              <div className="flex items-center space-x-4">
                <img src={BNI} alt="Bank BNI Logo" className="h-10 w-auto" />
                <div>
                  <p className="text-lg font-semibold">Bank BNI</p>
                  {selectedPayment === 'Bank BNI' && (
                    <div className="text-gray-600 mt-2">
                      <p>Nomor Rekening: 1234567890</p>
                      <p>a.n Yayasan SMK Wikrama Bogor</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Bayar di dalam div Pilihan Pembayaran */}
          <div className="text-center mt-6">
            <button
              className="flex items-center justify-center px-6 py-3 bg-[#A9B782] text-white font-semibold rounded-lg hover:bg-[#8DA06E] transition-colors duration-200"
            >
              <FaShoppingCart className="mr-2" /> {/* Ikon keranjang */}
              Bayar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PembayaranPage;
