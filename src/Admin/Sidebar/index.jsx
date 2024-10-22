// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/icons/Logo.png";
import PP from "../../assets/icons/PP.png";
import { BiHomeAlt, BiUser, BiListUl, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { PiWallet } from "react-icons/pi";
import Home from "../Home";
import Dashboard from "../Home";
import Pembayaran from "../Pembayaran";
import DataPembayaran from "../DataPembayaran";
import Keuangan from "../Keuangan";

export default function SidebarAdmin() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menu = [
    { name: "Dashboard", icon: <BiHomeAlt /> },
    { name: "Pembayaran", icon: <BiListUl /> },
    { name: "Data Siswa", icon: <BiListUl /> },
    { name: "Contacts", icon: <BiUser /> },
    { name: "Keuangan", icon: <PiWallet /> },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Home":
        return <Home />;
      case "Dashboard":
        return <Dashboard />;
      case "Pembayaran":
        return <Pembayaran />;
      case "Data Siswa":
        return <DataPembayaran />;
      case "Contacts":
        return <div>Contacts Content</div>;
      case "Keuangan":
        return <Keuangan />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar Section */}
      <div className="bg-slate-50 p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-lg font-semibold">Infaq Shodaqoh</span>
        </div>
        <div className="flex items-center">
          {/* Ikon Dropdown */}
          <div className="flex items-center mr-2 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {isDropdownOpen ? (
              <BiChevronUp className="text-gray-600 w-5 h-5" /> // Ikon Panah ke Atas jika dropdown terbuka
            ) : (
              <BiChevronDown className="text-gray-600 w-5 h-5" /> // Ikon Panah ke Bawah jika dropdown tertutup
            )}
          </div>
          <div className="relative" ref={dropdownRef}>
            <img
              src={PP}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <div className="flex items-center p-4">
                  <img src={PP} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
                  <div>
                    <div className="font-semibold text-gray-800">John Doe</div>
                    <div className="text-gray-600">admin@example.com</div>
                  </div>
                </div>
                <div className="border-t border-gray-200"></div>
                <div className="flex flex-col p-4">
                  <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-slate-100 flex flex-1">
        {/* Sidebar Menu Section */}
        <div className="h-full border-r border-gray-200 px-9 py-8 space-y-4">
          <div className="mb-8 text-blue-600 font-semibold text-lg">Menu</div>
          <ul className="space-y-4">
            {menu.map((val, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveMenu(val.name);
                }}
                className={`flex items-center cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeMenu === val.name ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="mr-3">{val.icon}</div>
                <div>{val.name}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 bg-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
