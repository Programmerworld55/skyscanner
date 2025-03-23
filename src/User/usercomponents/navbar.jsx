import React, { useState } from "react";
import "../userstyles/navbar.css";
import Sidebar from "./sidebar";
import { FaGlobeAmericas, FaRegHeart, FaBars, FaUserCircle, FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-skyscanner">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="/" className="logo-text">
            Skyscanner
          </a>
          <div className="navbar-icons d-flex align-items-center ms-auto">
            <FaGlobeAmericas className="nav-icon mx-2" title="Language" />
            <FaRegHeart className="nav-icon mx-2" title="Favorites" />
            <FaUserCircle className="profile-icon mx-2" title="Profile" />
            <FaBars
              className="nav-icon mx-2"
              title="Menu"
              onClick={() => (window.innerWidth > 992 ? toggleDropdown() : toggleSidebar())}
            />
          </div>
        </div>
      </nav>
      <div className="below-navbar">
        <div className="container d-flex justify-content-start py-2">
          <a className="below-nav-link me-2 active" href="/">
            ✈ Flights
          </a>
          <a className="below-nav-link me-2" href="/">
            🏨 Hotels
          </a>
          <a className="below-nav-link me-2" href="/">
            🚗 Car hire
          </a>
        </div>
      </div>

      {/* Dropdown menu for large devices */}
      {isDropdownOpen && window.innerWidth > 992 && (
        <div className="dropdown-menu">
          <a href="/" className="dropdown-item">
            <FaPlane className="dropdown-icon" /> Flights
          </a>
          <a href="/" className="dropdown-item">
            <FaHotel className="dropdown-icon" /> Hotels
          </a>
          <a href="/" className="dropdown-item">
            <FaCar className="dropdown-icon" /> Car hire
          </a>
          <hr />
          <a href="/" className="dropdown-item">
            <FaGlobeAmericas className="dropdown-icon" /> Regional settings
          </a>
          <a href="/" className="dropdown-item">
            <FaPlane className="dropdown-icon" /> Explore everywhere
          </a>
          <a href="/" className="dropdown-item">
            <FaRegHeart className="dropdown-icon" /> Help
          </a>
        </div>
      )}

      {/* Sidebar for small devices */}
      {isSidebarOpen && window.innerWidth <= 992 && <Sidebar onClose={toggleSidebar} />}
    </div>
  );
};

export default Navbar;