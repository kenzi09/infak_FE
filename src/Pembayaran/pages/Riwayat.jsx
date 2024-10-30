import React, { useState } from "react";

// Daftar data pembayaran
const paymentsData = [
    {
        month: "Januari",
        amount: "Rp 100,000",
        status: "Sudah Dibayar",
        details: {
            paymentDate: "10 Januari 2024",
            bankInfo: "BNI VA 123456789",
            notes: "",
        },
    },
    {
        month: "Februari",
        amount: "Rp 100,000",
        status: "Belum Ditagihkan",
        details: {},
    },
    {
        month: "Maret",
        amount: "Rp 100,000",
        status: "Belum Dibayar",
        details: {},
    },
];

function Riwayat() {
    const [isOpen, setIsOpen] = useState(false);
    const [popupData, setPopupData] = useState({});

    const openModal = (data) => {
        setPopupData(data);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="ml-12 mr-12">
            <p className="font-serif font-bold">Kartu Zakat Infaq dan Shodaqoh</p>
            <br />

            {/* Tabel pembayaran */}
            <div className="overflow-x-auto mt-2">
                <table className="min-w-full bg-[#FFFDF1] border border-gray-200 rounded-lg">
                    <thead className="bg-[#A9B782]">
                        <tr>
                            <th className="py-2 px-4 text-left text-white">Bulan</th>
                            <th className="py-2 px-4 text-left text-white">Nominal Tagihan</th>
                            <th className="py-2 px-4 text-left text-white">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsData.map((data, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                                onClick={() => openModal(data)}
                            >
                                <td className="py-2 px-4">{data.month}</td>
                                <td className="py-2 px-4">{data.amount}</td>
                                <td className="py-2 px-4">
                                    <span
                                        className={`font-semibold px-2 py-1 rounded-lg ${
                                            data.status === "Sudah Dibayar"
                                                ? "bg-green-100 text-green-700"
                                                : data.status === "Belum Ditagihkan"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {data.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Popup */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-[#FFFDF1] rounded-lg p-6 w-96 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            X
                        </button>
                        <div className="text-center">
                            <span
                                className={`inline-block font-semibold px-4 py-2 rounded-full mb-4 ${
                                    popupData.status === "Sudah Dibayar"
                                        ? "bg-green-100 text-green-700"
                                        : popupData.status === "Belum Ditagihkan"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                            >
                                {popupData.status}
                            </span>
                            <h2 className="text-3xl font-bold">{popupData.amount}</h2>
                            <p className="text-gray-700 mt-2">
                                Zakat Infaq dan Shadaqoh Bulan {popupData.month} 2024
                            </p>
                        </div>
                        <div className="mt-4 border-t pt-4">
                            <h3 className="font-bold text-lg">Pembayaran</h3>
                            <p className="text-gray-600 mt-2">
                                {popupData.details?.paymentDate || "-"}
                            </p>
                            <p className="text-gray-600">{popupData.details?.bankInfo || "-"}</p>
                            <p className="text-gray-600">{popupData.details?.notes || "-"}</p>
                            <p className="text-sm text-gray-500 mt-2">Diterima oleh Wikrama</p>
                            <p className="text-sm text-gray-500">Catatan: {popupData.details?.notes || "-"}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Riwayat;
