import React from "react";
import bg from "../../assets/img/bg.png";

function Tagihan() {
    return(
        <div
            className="p-2 rounded-[5px] flex justify-between h-[120px] items-center shadow-xl"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col">
              <div className="flex space-x-2 mb-1">
                <span className="bg-[#F5D9A0] text-[#CE9C1C] font-bold py-1 px-2 rounded-[2px] text-[8px]">
                  Belum Dibayar
                </span>
                <span className="bg-[#F5A0A0] text-[#D13F3F] font-bold py-1 px-2 rounded-[2px] text-[8px]">
                  Menunggak
                </span>
              </div>
              <p className="font-bold text-black text-sm">
                Zakat Infaq dan Shadaqoh Bulan Juli 2024
              </p>
              <p className="text-gray-700 text-xs">No. Rekening: 1078742696</p>
              <p className="text-gray-700 text-xs">
                Nama Rekening: SMK Wikrama Bogor
              </p>
              <p className="text-gray-700 text-xs">
                Bank: Bank Syariah Indonesia (BSI)
              </p>
            </div>
            <div className="flex justify-center w-[150px] h-[40px]">
              <span className="bg-[#A9B782] text-white py-1 px-4 rounded-[10px] w-[150px] h-[40px] text-sm flex items-center justify-center">
                Rp50.000
              </span>
            </div>
          </div>
    );
}

export default Tagihan;