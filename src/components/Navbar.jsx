import React, { useState } from "react";
import {
  UilBell,
  UilCalendarAlt,
  UilChartLine,
  UilAlignLeft,
  UilAlignRight,
  UilUserCircle,
  UilCreateDashboard,
  UilTagAlt,
  UilBill,
  UilUserNurse,
  UilFeedback,
  UilFlaskPotion,
  UilAirplay,
  UilApps,
  UilRobot,
  UilMegaphone,
  UilUser,
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Hamburger Menu */}
      <button onClick={toggleSidebar} className="text-2xl">
        {isOpen ? <UilAlignRight /> : <UilAlignLeft />}
      </button>

      {/* Profile Info */}
      <div className="flex items-center space-x-4">
        <img src="bella.jpg" alt="Profile" className="rounded-full w-10 h-10" />
        <div className="hidden md:block">
          <h2 className="font-semibold text-gray-800">Bella Famina</h2>
          <p className="text-gray-500 text-sm">Joined 2 months ago</p>
        </div>
        <div className="relative">
          <UilUserCircle size="30" className="text-xl" />
        </div>
        <div className="relative">
          <UilBell size="30" className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center p-4 border-b">
          <img src="testing.png" alt="Logo" className="w-25 h-10" />
          <button onClick={toggleSidebar} className="text-2xl ml-auto">
            <UilAlignRight />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-4rem)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <a
            href="#"
            onClick={() => setActiveLink("dashboard")}
            className={`flex items-center space-x-2 ${
              activeLink === "dashboard"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilCreateDashboard className="text-lg" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("calendar")}
            className={`flex items-center space-x-2 ${
              activeLink === "calendar"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilCalendarAlt className="text-lg" />
            <span>Calendar</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("sales")}
            className={`flex items-center space-x-2 ${
              activeLink === "sales"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilTagAlt className="text-lg" />
            <span>Sales</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("expenses")}
            className={`flex items-center space-x-2 ${
              activeLink === "expenses"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilBill className="text-lg" />
            <span>Expenses</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("employee")}
            className={`flex items-center space-x-2 ${
              activeLink === "employee"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilUserNurse className="text-lg" />
            <span>Employee</span>
          </a>

          <a
            href="#"
            onClick={() => setActiveLink("customer")}
            className={`flex items-center space-x-2 ${
              activeLink === "customer"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilFeedback className="text-lg" />
            <span>Customers</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("product")}
            className={`flex items-center space-x-2 ${
              activeLink === "product"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilFlaskPotion className="text-lg" />
            <span>Products</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("hrm")}
            className={`flex items-center space-x-2 ${
              activeLink === "hrm"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilAirplay className="text-lg" />
            <span>HRM</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("crm")}
            className={`flex items-center space-x-2 ${
              activeLink === "crm"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilApps className="text-lg" />
            <span>CRM</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("automation")}
            className={`flex items-center space-x-2 ${
              activeLink === "automation"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilRobot className="text-lg" />
            <span>Automation</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("marketing")}
            className={`flex items-center space-x-2 ${
              activeLink === "marketing"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilMegaphone className="text-lg" />
            <span>Marketing</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("report")}
            className={`flex items-center space-x-2 ${
              activeLink === "report"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilChartLine className="text-lg" />
            <span>Reports</span>
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("account")}
            className={`flex items-center space-x-2 ${
              activeLink === "account"
                ? "bg-gray-800 text-gray-50"
                : "text-gray-800 hover:bg-gray-800 hover:text-gray-50"
            } px-2 py-2 rounded`}
          >
            <UilUser className="text-lg" />
            <span>My Account</span>
          </a>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
