import React, { useEffect, useState } from "react";
import axios from "axios";

function Riwayat() {
    const [dataBulan, setDataBulan] = useState([]);

    useEffect(() => {
        // Fungsi untuk mengambil data dari API
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/bulan");
                setDataBulan(response.data?.data || []); // Menyimpan data bulan ke dalam state, atau set kosong jika tidak ada data
                const userRole = response.data; // Akses role dari object data
                console.log("data yang diterima", userRole);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="ml-12 mr-12 ">
            <p className="font-pt-serif font-bold">Kartu Zakat Infaq dan Shodaqoh</p>
            <br />

            <details className="mb-4">
                <summary className="flex items-center cursor-pointer font-pt-serif font-bold">
                    <span>TP 2024/2025</span>
                    <svg
                        className="ml-auto w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>
                <div className="overflow-x-auto mt-2">
                    <table className="min-w-full bg-white">
                        <thead className="bg-[#A9B782]">
                            <tr>
                                <th className="py-2 px-4 text-left text-white">Bulan</th>
                                <th className="py-2 px-4 text-left text-white">Tanggal Bayar</th>
                                <th className="py-2 px-4 text-left text-white">Nominal Tagihan</th>
                                <th className="py-2 px-4 text-left text-white">Tanda Tangan Ortu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataBulan.length > 0 ? (
                                dataBulan.map((bulan, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4">{bulan.nama_bulan}</td>
                                        <td className="py-2 px-4">-</td>
                                        <td className="py-2 px-4">-</td>
                                        <td className="py-2 px-4">-</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="py-2 px-4" colSpan="4">
                                        Data tidak tersedia
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </details>
            <hr className="my-4" />
        </div>
    );
}

export default Riwayat;
