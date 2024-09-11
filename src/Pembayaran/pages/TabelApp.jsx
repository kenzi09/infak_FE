import React from "react";

function TabelApp() {

    const data = [
        { bulan: 'Juli', tanggalBayar: '01 Juli 2024', penerima: 'Wikrama', paraf: true, ttdOrtu: 'jokowi' },
        { bulan: 'Agustus', tanggalBayar: '01 Juli 2024', penerima: 'Wikrama', paraf: false, ttdOrtu: '' },
        { bulan: 'September', tanggalBayar: '01 Juli 2024', penerima: 'Wikrama', paraf: true, ttdOrtu: ' ' },
        { bulan: 'Oktober', tanggalBayar: '01 Juli 2024', penerima: 'Wikrama', paraf: true, ttdOrtu: ' ' },
        { bulan: 'November', tanggalBayar: '-', penerima: '', paraf: false, ttdOrtu: '' },
        { bulan: 'Desember', tanggalBayar: '-', penerima: '', paraf: false, ttdOrtu: '' },
        { bulan: 'Januari', tanggalBayar: '-', penerima: '', paraf: false, ttdOrtu: '' },
        { bulan: 'Februari', tanggalBayar: '-', penerima: '', paraf: false, ttdOrtu: '' },
        { bulan: 'Maret', tanggalBayar: '-', penerima: '', paraf: false, ttdOrtu: '' },
        { bulan: 'April', tanggalBayar: '-', penerima: '', paraf: false, ttdOrtu: '' },
      ];
    
    return(
        <div className="overflow-x-auto flex justify-center">
            <table className="w-[93%] bg-white table-bordered">
              <thead className="bg-[#A9B782] border border-[#A9B782]">
                <tr className="">
                  <th className="py-2 px-4 text-left text-white">Bulan</th>
                  <th className="py-2 px-4 text-left text-white">
                    Tanggal Bayar
                  </th>
                  <th className="py-2 px-4 text-left text-white">Penerima</th>
                  <th className="py-2 px-4 text-left text-white">Paraf</th>
                  <th className="py-2 px-4 text-left text-white">
                    Tanda Tangan Ortu
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#FFFDF1]">
              {data.map((item, index) => (
                    <tr key={index} className="border border-solid border-gray-300 rounded-xl">
                        {/* <div className="mb-4"> */}
                            <td className="mb-4 py-2 px-4">{item.bulan}</td>
                        {/* </div> */}
                        {/* <div> */}
                            <td className=" py-2 px-4">{item.tanggalBayar}</td>
                        {/* </div> */}
                        <td className=" py-2 px-4">{item.penerima}</td>
                        <td className=" py-2 px-4 ">
                        {item.paraf ? (
                            <span className="checkmark">✅</span>
                            ) : (
                            <span className="cross">❌</span>
                        )}
                        </td>
                        <td className="py-2 px-4">{item.ttdOrtu}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
    );
}

export default TabelApp;