import React, { useState, useEffect, useRef } from "react";
// import "../../index.css";
import "../../Users/index.css"
import { FaUser, FaChevronDown, FaUserCircle, FaKey, FaSignOutAlt } from "react-icons/fa"; 
import wk from "../img/wk.jpg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 
    const dropdownRef = useRef(null); // Referensi ke elemen dropdown
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen); 
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Menutup dropdown jika klik di luar elemen
      }
    };

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside); // Menambahkan event listener saat dropdown terbuka
      } else {
        document.removeEventListener("mousedown", handleClickOutside); // Menghapus event listener saat dropdown tertutup
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener saat komponen unmount
      };
    }, [isOpen]);

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
              <div className="user-info text-black-800">Nama Pengguna</div>
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
                  <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer">
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
    )
}

export default Navbar;