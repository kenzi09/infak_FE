// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";
import { BiHomeAlt, BiGridAlt, BiLogOut } from "react-icons/bi";
import '../index.css';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", path: "/PS", icon: <BiHomeAlt /> }, // Menu Dashboard
    { name: "Pembayaran", path: "/PS/pembayaran", icon: <BiGridAlt /> }, // Menu Pembayaran
  ];

  return (
    <div className="flex bg-white">
      <div className="h-screen border-r border-gray-200 w-64 px-9 space-y-24">
        <div className="flex flex-row items-center pt-8">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <div className="ml-3 text-gray-700">Infaq Shodaqoh</div>
        </div>
        <div className="space-y-24">
          <div>
            <div className="mb-5 text-blue-600">Menu</div>
            <ul className="space-y-5">
              {menu.map((val, index) => (
                <Link
                  to={val.path}
                  className="flex justify-center items-center"
                  key={index}
                >
                  <li
                    onClick={() => setActiveMenu(val.name)}
                    className={`flex flex-row items-center text-gray-600 cursor-pointer pl-6 pr-16 py-2 rounded-lg ${
                      activeMenu === val.name ? "bg-blue-100 text-blue-600" : ""
                    }`}
                  >
                    <div className="mr-3">{val.icon}</div>
                    <div>{val.name}</div> {/* Routing ke halaman */}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-8 bg-white">
        {/* Navbar */}
        <div className="flex justify-end items-center pb-4 border-b border-gray-200">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200">
            <BiLogOut className="mr-2 text-lg" />
            Logout
          </button>
        </div>
        
        <Outlet /> {/* Konten dinamis akan ditampilkan di sini */}
      </div>
    </div>
  );
}
