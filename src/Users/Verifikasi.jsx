import React, { useState, useEffect } from "react";
import axios from "axios";
import logoWikrama from "../assets/img/logoWikrama.png";
import { useNavigate } from "react-router-dom";

const Verifikasi = () => {
  const [noTlp, setNoTlp] = useState("");
  const [nominal, setNominal] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(() => {
    const savedData = sessionStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      // Jika tidak ada token, arahkan kembali ke halaman login
      navigate("/login");
      return;
    }

    if (!userData) {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/siswa", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = response.data?.data || {};
          setUserData(data);

          // Periksa apakah data nominal atau no_tlp kosong
          if (!data.nominal || !data.no_tlp) {
            navigate("/User/verifikasi");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          navigate("/login");
        }
      };

      fetchData();
    }
  }, [userData, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Debug data sebelum dikirim
      console.log("Data sebelum pembaruan:", { no_tlp: noTlp, nominal });

      const response = await axios.put(
        `http://127.0.0.1:8000/api/siswa/verifikasi/${userData.id}`,
        {
          no_tlp: noTlp, // Update nomor telepon
          nominal: nominal, // Update nominal
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        // Debug data setelah pembaruan berhasil
        console.log("Data setelah pembaruan:", {
          no_tlp: noTlp,
          nominal: nominal,
        });

        setMessage("Data berhasil diperbarui!");
        setTimeout(() => {
          navigate("/User/dashboard");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      setMessage("");
      setError("Gagal memperbarui data. Periksa kembali input atau API.");
    }
  };

  const handleNumberInput = (e, setter) => {
    const value = e.target.value.replace(/\D/g, "");
    setter(value);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF1]">
      <div className="justify-center items-center">
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-slate-300 bg-opacity-20 rounded-xl">
            <h1 className="w-[500px] pt-6 text-2xl font-bold text-left decoration-2 font-serif flex justify-center items-center">
              Verifikasi
            </h1>
            <div className="w-[500px] h-[360px] mb-[40px] flex justify-center items-center">
              <div className="absolute top-6 left-6 flex items-center">
                <img
                  src={logoWikrama}
                  alt="Logo Wikrama"
                  className="h-[40px] w-[40px] mr-2 hidden lg:block"
                />
                <span
                  className="text-[8.3px] font-semibold lg:text-[14px] text-white lg:text-black lg:pr-11 pr-0"
                  style={{ fontFamily: "Poppins" }}
                >
                  SMK WIKRAMA BOGOR
                </span>
                <img
                  src={logoWikrama}
                  alt="Logo Wikrama"
                  className="h-[24px] w-[24px] ml-2 block lg:hidden lg:pr-0 mr-2"
                />
              </div>
              <form onSubmit={handleSubmit} className="lg:space-y-6 space-y-5">
                <div>
                  <label
                    htmlFor="no_tlp"
                    className="block lg:text-base text-[12.06px] font-medium text-black mb-1"
                  >
                    No Telpon
                  </label>
                  <input
                    id="no_tlp"
                    name="no_tlp"
                    type="text"
                    required
                    className="appearance-none w-[261.68px] h-[35.57px] lg:w-[434px] lg:h-[59px] px-4 py-2 border border-green-600 lg:rounded-[20px] rounded-[12.06px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 bg-transparent"
                    value={noTlp}
                    onChange={(e) => handleNumberInput(e, setNoTlp)}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="nominal"
                    className="block lg:text-base text-[12.06px] font-medium text-black mb-1"
                  >
                    Nominal
                  </label>
                  <input
                    id="nominal"
                    name="nominal"
                    type="text"
                    required
                    className="appearance-none w-[261.68px] h-[35.57px] lg:w-[434px] lg:h-[59px] px-4 py-2 border border-green-600 lg:rounded-[20px] rounded-[12.06px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 bg-transparent"
                    value={nominal}
                    onChange={(e) => handleNumberInput(e, setNominal)}
                  />
                </div>

                {message && (
                  <div className="text-green-500 text-sm mt-2">{message}</div>
                )}
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

                <div>
                  <button
                    type="submit"
                    className="lg:text-base text-[12.06px] w-[261.68px] h-[35.57px] lg:w-[434px] lg:h-[59px] flex items-center justify-center border border-transparent lg:rounded-[20px] rounded-[12.06px] shadow-sm text-sm font-medium text-white bg-gradient-to-b from-[#467048] to-[#AAB883] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-bold"
                  >
                    Perbarui
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifikasi;
