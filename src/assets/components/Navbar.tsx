import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

interface Props {
  openNav: () => void;
}

const Navbar: React.FC<Props> = ({ openNav }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage for dark mode preference on initial load
    return localStorage.getItem("darkmode") === "active";
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", "null");
    } else {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    }
    setIsDarkMode(!isDarkMode); // Toggle the state
  };

  // Apply dark mode class on initial load if necessary
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`flex justify-between background-to w-[100%] h-[12vh]  ${
        isDarkMode ? "darkmode" : ""
      }`}
    >
      <h1 className="font-bold  flex items-center mx-12 text-3xl">
        Web <span className="text-teal-900">Dev</span>
      </h1>
      <div className="md:flex md:items-center">
        <ul className="flex space-x-6 pr-9">
          <li>
            <a href="#Hero" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#Service" className="nav-link">
              Service
            </a>
          </li>
          <li>
            <a href="#Project" className="nav-link">
              Project
            </a>
          </li>
          <li>
            <a href="#Contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div onClick={openNav}>
        <FaBars />
      </div>
      <button id="theme-switch" onClick={toggleDarkMode}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
        </svg>
      </button>
    </div>
  );
};
export default Navbar;
