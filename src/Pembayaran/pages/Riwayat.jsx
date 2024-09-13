import React from "react";

function Riwayat() {
    return (
        <div className="ml-12 mr-12">
            <p className="font-pt-serrif font-bold">Kartu Zakat Infaq dan Shodaqoh</p>
            <br />

            {/* TP 2024/2025 Dropdown */}
            <details className="mb-4">
                <summary className="flex items-center cursor-pointer font-pt-serrif font-bold">
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
                            {/* Add table rows for data here */}
                        </tbody>
                    </table>
                </div>
            </details>
            <hr className="my-4" />

            {/* TP 2023/2024 Dropdown */}
            <details className="mb-4">
                <summary className="flex items-center cursor-pointer font-pt-serrif font-bold">
                    <span>TP 2023/2024</span>
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
                            {/* Add table rows for data here */}
                        </tbody>
                    </table>
                </div>
            </details>
            <hr className="my-4" />

            {/* TP 2022/2023 Dropdown */}
            <details className="mb-4">
                <summary className="flex items-center cursor-pointer font-pt-serrif font-bold">
                    <span>TP 2022/2023</span>
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
                            {/* Add table rows for data here */}
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
    );
}

export default Riwayat;
