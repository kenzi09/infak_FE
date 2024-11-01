import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const paymentsData = [
  {
    year: "TP 2024/2025",
    data: [
      {
        month: "Januari",
        amount: "Rp.50.000",
        status: "Sudah Dibayar",
        details: {
          paymentDate: "10 Januari 2024",
          bankInfo: "BNI VA 123456789",
          notes: "",
        },
      },
      {
        month: "Februari",
        amount: "Rp.50.000",
        status: "Belum Ditagihkan",
        details: {},
      },
      {
        month: "Maret",
        amount: "Rp.50.000",
        status: "Belum Dibayar",
        details: {},
      },
    ],
  },
  // Add more years and data as needed
];

function Riwayat() {
  const [dataBulan, setDataBulan] = useState([]);
  const [isOpen, setIsOpen] = useState({});
  const [popupData, setPopupData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bulan");
        setDataBulan(response.data?.data || []);
        console.log("data yang diterima", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleDropdown = (year) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [year]: !prevState[year],
    }));
  };

  const openModal = (data) => {
    setPopupData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="ml-12 mr-12">
      <p className="font-pt-serif font-bold">Kartu Zakat Infaq dan Shodaqoh</p>
      <br />

      {paymentsData.map((yearData, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown(yearData.year)}
          >
            <p className="font-serif font-bold text-lg">{yearData.year}</p>
            {isOpen[yearData.year] ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          <hr className="border-gray-300 my-2" />
          {isOpen[yearData.year] && (
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
                  {yearData.data.map((data, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                      onClick={() => openModal(data)}
                    >
                      <td className="py-2 px-4">{data.month}</td>
                      <td className="py-2 px-4">{data.amount}</td>
                      <td className="py-2 px-4">
                        <span
                          className={`font-semibold px-2 py-1 rounded-full ${
                            data.status === "Sudah Dibayar"
                              ? "bg-green-100 text-green-700"
                              : data.status === "Belum Ditagihkan"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {data.status}
                          {data.status === "Sudah Dibayar" && (
                            <FaCheckCircle className="inline ml-2 text-green-700" />
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-[#FFFDF1] rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold p-2"
            >
              &times;
            </button>
            <div className="text-center">
              <span
                className={`inline-block font-semibold px-4 py-2 rounded-full mb-4 ${
                  popupData.status === "Sudah Dibayar"
                    ? "bg-green-100 text-green-700"
                    : popupData.status === "Belum Ditagihkan"
                    ? "bg-[#FCF596] text-[#DEAE48]"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {popupData.status}
                {popupData.status === "Sudah Dibayar" && (
                  <FaCheckCircle className="inline ml-2 text-green-700" />
                )}
              </span>
              <h2 className="text-3xl font-bold">{popupData.amount}</h2>
              <p className="text-lg text-gray-700 mt-2">
                Zakat Infaq dan Shadaqoh Bulan {popupData.month} 2024
              </p>
            </div>
            <div className="mt-4 border border-gray-300 p-4 rounded-md">
              <h3 className="font-bold text-xl">Pembayaran</h3>
              <div className="ml-2">
                <p className="text-lg text-gray-600 mt-2">
                  Tanggal Pembayaran: {popupData.details?.paymentDate || "-"}
                </p>
                <p className="text-lg text-gray-600">
                  Info Bank: {popupData.details?.bankInfo || "-"}
                </p>
                <p className="text-lg text-gray-600">
                  Berita Acara: {popupData.details?.notes || "-"}
                </p>
              </div>
              <div className="border-t border-gray-300 mt-4"></div>
              <p className="text-sm text-gray-500 mt-2 ml-2">Diterima oleh Wikrama</p>
              <p className="text-lg text-gray-600 ml-2">
                Catatan: {popupData.details?.notes || "-"}
              </p>
            </div>
          </div>

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
      )}
    </div>
  );
}

export default Riwayat;
