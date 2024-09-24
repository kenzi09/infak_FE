import React from "react";
import bg from "../../assets/img/bg.png";
import StatusBlmBayar from "../../assets/Items/Status/StatusBlmBayar";
import Menunggak from "../../assets/Items/Status/Menunggak";

function Tagihan() {
  return (
    <div
      className="p-2 rounded-[5px] flex flex-col lg:flex-row justify-between items-center shadow-xl ml-4 mr-4 lg:ml-12 lg:mr-12"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto lg:space-x-2 mb-2 lg:mb-0">
        <div className="mr-2">
          <StatusBlmBayar />
        </div>
        <Menunggak />
        <div className="flex flex-col ml-2 lg:ml-4">
          <p className="font-bold text-black text-sm mb-1 lg:mb-0">
            Zakat Infaq dan Shadaqoh Bulan Juli 2024
          </p>
          <p className="text-gray-700 text-xs mb-1 lg:mb-0">
            No. Rekening: <span className="font-bold">1078742696</span>
          </p>
          <p className="text-gray-700 text-xs mb-1 lg:mb-0">
            Nama Rekening: <span className="font-bold">SMK Wikrama Bogor</span>
          </p>
          <p className="text-gray-700 text-xs mb-1 lg:mb-0">
            Bank: <span className="font-bold">Bank Syariah Indonesia (BSI)</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start w-full lg:w-[150px] h-[40px] mt-2 lg:mt-0">
        <span className="bg-[#A9B782] text-white py-1 px-4 rounded-[10px] w-full lg:w-[150px] h-[40px] text-sm flex items-center justify-center">
          Rp50.000
        </span>
      </div>
    </div>
  );
}

export default Tagihan;
