import React, { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import bg from "../../assets/img/bg3.jpg";
import QR from "../../assets/img/QR.png";
import BNI from "../../assets/img/BNI.jpg";
import Navbar from "../../assets/Items/navbar";
import { useLocation, useNavigate } from "react-router-dom";

const PembayaranPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bayarRef = useRef(null);

  const selectedMonths = location.state?.selectedMonths || "Bulan belum dipilih";

  const [selectedZakat, setSelectedZakat] = useState('Pilih Jenis Zakat');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isZakatOpen, setIsZakatOpen] = useState(false);
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false); // State to toggle QR code visibility

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

  const handleScanClick = () => {
    setIsQRCodeVisible(true); // Show the QR code card
  };

  const handleCloseQRCode = () => {
    setIsQRCodeVisible(false); // Close the QR code card
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
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Pilih Metode Pembayaran</h3>

          {/* Pilihan Pembayaran */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-200 ${selectedPayment === 'QRIS' ? 'bg-[#A9B782] text-white' : 'bg-transparent text-gray-800'}`}
              onClick={() => handlePaymentSelect('QRIS')}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
                  <img src={QR} alt="QRIS Logo" className="h-16 w-16 object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">QRIS Scan</p>
                  {selectedPayment === 'QRIS' && (
                    <>
                      <p className="text-gray-600 mt-2">Klik untuk scan kode QR</p>
                      <button
                        onClick={handleScanClick}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                      >
                        Scan
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-200 ${selectedPayment === 'Bank BNI' ? 'bg-[#A9B782] text-white' : 'bg-transparent text-gray-800'}`}
              onClick={() => handlePaymentSelect('Bank BNI')}
            >
              <div className="flex items-center space-x-4">
                <img src={BNI} alt="Bank BNI Logo" className="h-12 w-auto" />
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

          {/* Card QR when clicked */}
          {isQRCodeVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
      <p className="text-center text-lg font-semibold mb-4">QR Code Pembayaran</p>
      <div className="flex justify-center items-center mb-4">
        {/* Memperbesar ukuran QR Code */}
        <img src={QR} alt="QR Code" className="h-80 w-80 object-contain" />
      </div>
      <button
        onClick={handleCloseQRCode}
        className="block w-full bg-red-500 text-white py-2 rounded-lg text-center hover:bg-red-600 transition-colors duration-200"
      >
        Tutup
      </button>
    </div>
  </div>
)}


          {/* Tombol Bayar */}
          <div className="text-center mt-8">
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
