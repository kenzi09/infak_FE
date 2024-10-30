import React, { useState } from 'react';
import bg from "../assets/img/bg3.jpg";
import Navbar from "../assets/Items/navbar";

const PembayaranPage = () => {
  const [isZakatDropdownOpen, setIsZakatDropdownOpen] = useState(false);
  const [isBulanDropdownOpen, setIsBulanDropdownOpen] = useState(false);
  const [selectedZakat, setSelectedZakat] = useState('Masukkan Pilihan Zakat');
  const [selectedBulan, setSelectedBulan] = useState('Masukkan Bulan');

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

  return (
    <div className="min-h-screen bg-[#FFFDF1]">
      <Navbar />
      <main className="container mx-auto py-12 px-4">
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
                className="w-full p-3 border border-[#A9B782] rounded bg-[#A9B782] text-white focus:outline-none"
                onClick={toggleZakatDropdown}
              >
                {selectedZakat}
              </button>
              {isZakatDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border border-[#A9B782] rounded shadow-md">
                  {zakatOptions.map((option) => (
                    <div
                      key={option}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
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
                className="w-full p-3 border border-[#A9B782] rounded bg-[#A9B782] text-white focus:outline-none"
                onClick={toggleBulanDropdown}
              >
                {selectedBulan}
              </button>
              {isBulanDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border border-[#A9B782] rounded shadow-md">
                  {bulanOptions.map((option) => (
                    <div
                      key={option}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
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
