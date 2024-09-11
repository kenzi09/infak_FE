import React from "react";

function Riwayat() {
    return(
        <div>
            <p>Kartu Zakat Infaq dan Shodaqoh</p>
            <br />
            <p>TP 2024/2025</p>
            <br />
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-[#A9B782]">
                  <tr>
                    <th className="py-2 px-4 text-left text-white">Bulan</th>
                    <th className="py-2 px-4 text-left text-white">
                      Tanggal Bayar
                    </th>
                    <th className="py-2 px-4 text-left text-white">
                      Nominal Tagihan
                    </th>
                    <th className="py-2 px-4 text-left text-white">
                      Tanda Tangan Ortu
                    </th>
                  </tr>
                </thead>
                <tbody>{/* Tambahkan baris tabel di sini */}</tbody>
              </table>
            </div>
          </div>
    );
}

export default Riwayat