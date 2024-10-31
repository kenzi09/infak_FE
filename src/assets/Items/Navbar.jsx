import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaChevronDown, FaUserCircle, FaKey, FaSignOutAlt } from "react-icons/fa"; 
import wk from "../img/wk.jpg";
import axios from "axios"; // Tambahkan axios untuk panggilan API

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 
    const [userName, setUserName] = useState(""); // State untuk menyimpan nama pengguna
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Mengambil nama pengguna dari localStorage
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const { name } = JSON.parse(storedUserData);
            setUserName(name);
        }
    }, []);

    const toggleDropdown = () => {
      setIsOpen(!isOpen); 
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        
        try {
            await axios.post("http://127.0.0.1:8000/api/logout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Menghapus token dan data pengguna dari localStorage setelah logout
            localStorage.removeItem("token");
            localStorage.removeItem("userData");
            window.location.href = "/"; // Redirect ke halaman login atau landing page
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    

    return (
        <header className="header flex justify-between items-center px-4 shadow-lg">
          <div className="flex items-center">
            <img src={wk} alt="Logo" className="logo-image w-11 h-11" />
            <h5 className="ml-3 font-semibold font-poppins">SMK WIKRAMA BOGOR</h5>
          </div>
          <div className="relative flex items-center space-x-2" ref={dropdownRef}>
            <div className="icon-background">
              <FaUser style={{ color: "#ADB8C2" }} />
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <div className="user-info text-black-800">{userName}</div> {/* Menampilkan nama pengguna */}
              <FaChevronDown className="text-black-600" />
            </div>
            {isOpen && (
              <div className="dropdown-menu absolute right-0 mt-2 bg-[#faf8ef] border border-gray-200 rounded-lg shadow-lg w-48">
                <ul className="p-2">
                  <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer">
                    <FaUserCircle className="mr-2" />
                    Ganti Foto Profil
                  </li>
                  <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer">
                    <FaKey className="mr-2" />
                    Ganti Password
                  </li>
                  <li
                    className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout} // Menambahkan event handler logout
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
    );
}

export default Navbar;
