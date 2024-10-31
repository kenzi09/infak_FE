// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import bg from "../assets/img/bg3.jpg";
import Navbar from "../assets/Items/navbar";
import { FaChevronDown } from 'react-icons/fa'; // Import icon
import { useNavigate } from "react-router-dom";
import Back from '../assets/Items/ButtonBack';

const PembayaranPage = () => {
  const [isZakatDropdownOpen, setIsZakatDropdownOpen] = useState(false);
  const [isBulanDropdownOpen, setIsBulanDropdownOpen] = useState(false);
  const [selectedZakat, setSelectedZakat] = useState('Masukkan Pilihan Zakat');
  const [selectedBulan, setSelectedBulan] = useState('Masukkan Bulan');
  const navigate = useNavigate(); // Menyiapkan navigasi

  const zakatOptions = ['Zakat Fitrah', 'Zakat Mall'];
  const bulanOptions = ['Januari', 'Februari', 'Maret', 'April'];

  const toggleZakatDropdown = () => {
    setIsZakatDropdownOpen(!isZakatDropdownOpen);
  };

  const toggleBulanDropdown = () => {
    setIsBulanDropdownOpen(!isBulanDropdownOpen);
  };

  const handleZakatSelect = (option) => {
    setSelectedZakat(option);
    setIsZakatDropdownOpen(false);
  };

  const handleBulanSelect = (option) => {
    setSelectedBulan(option);
    setIsBulanDropdownOpen(false);
  };

  const handleBackClick = () => {
    navigate("/user/dashboard"); // Kembali ke halaman Dashboard2
  };

  return (
    <div className="min-h-screen bg-[#FFFDF1]" style={{ fontFamily: "'PT Serif', serif" }}>
      <Navbar />
      {/* <div className="flex items-center justify-between p-5 absolute">

<button
onClick={handleBackClick} // Mengatur klik tombol untuk navigasi
className="flex items-center bg-[#A9B782] text-white py-2 px-4 rounded-[4px] space-x-2"
style={{
  background:
  "linear-gradient(to bottom, #456F47, #69895C, #A9B782)",
  }}
  >
  <FiLogOut className="text-white" />
            <span>Back</span>
          </button>
          </div> */}

      <main className="container mx-auto py-12 px-4">
        <Back/>
        <section className="p-8 rounded-lg shadow-md mb-8" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <h2 className="text-2xl font-bold mb-10">Pembayaran</h2>
          <div className="flex space-x-4 mb-10">
            {/* Manual Dropdown for Zakat */}
            <div className="relative w-1/2">
              <button
                className="w-full p-3 border border-[#A9B782] rounded bg-[#A9B782] text-white flex justify-between items-center focus:outline-none"
                onClick={toggleZakatDropdown}
              >
                {selectedZakat}
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${isZakatDropdownOpen ? 'rotate-180' : ''}`} 
                /> {/* Add rotating animation */}
              </button>
              {isZakatDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border border-[#A9B782] rounded shadow-md z-10">
                  {zakatOptions.map((option) => (
                    <div
                      key={option}
                      className="p-3 hover:bg-[#A9B782] hover:text-white cursor-pointer transition-colors duration-200"
                      onClick={() => handleZakatSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Manual Dropdown for Bulan */}
            <div className="relative w-1/2">
              <button
                className="w-full p-3 border border-[#A9B782] rounded bg-[#A9B782] text-white flex justify-between items-center focus:outline-none"
                onClick={toggleBulanDropdown}
              >
                {selectedBulan}
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${isBulanDropdownOpen ? 'rotate-180' : ''}`} 
                /> {/* Add rotating animation */}
              </button>
              {isBulanDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border border-[#A9B782] rounded shadow-md z-10">
                  {bulanOptions.map((option) => (
                    <div
                      key={option}
                      className="p-3 hover:bg-[#A9B782] hover:text-white cursor-pointer transition-colors duration-200"
                      onClick={() => handleBulanSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="p-8 rounded-lg shadow-md" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <h2 className="text-2xl font-bold mb-6">Pilih Pembayaran</h2>
          <div className="border p-10 rounded-lg bg-white flex justify-center">
            <img src="qris_placeholder.png" alt="QRIS" className="h-40 w-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PembayaranPage;
