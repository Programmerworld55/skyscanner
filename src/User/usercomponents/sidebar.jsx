import React from "react";
import "../userstyles/sidebar.css";
import { FaTimes, FaPlane, FaHotel, FaCar, FaGlobe, FaHeart } from "react-icons/fa";

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a href="/" className="logo-text">
          Skyscanner
        </a>
        <FaTimes className="close-icon" onClick={onClose} />
      </div>
      <div className="sidebar-links">
        <a href="/" className="sidebar-link">
          <FaPlane className="sidebar-icon" /> Flights
        </a>
        <a href="/" className="sidebar-link">
          <FaHotel className="sidebar-icon" /> Hotels
        </a>
        <a href="/" className="sidebar-link">
          <FaCar className="sidebar-icon" /> Car hire
        </a>
        <hr />
        <a href="/" className="sidebar-link">
          <FaGlobe className="sidebar-icon" /> Regional settings
        </a>
        <a href="/" className="sidebar-link">
          <FaPlane className="sidebar-icon" /> Explore everywhere
        </a>
        <a href="/" className="sidebar-link">
          <FaHeart className="sidebar-icon" /> Help
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
