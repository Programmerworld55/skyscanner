import React, { useState } from "react";
import "../userstyles/footer.css";
import { FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-column">
            <button className="location-btn">
              <FaMapMarkerAlt className="location-icon" />
              Pakistan · English (UK) · Rs PKR
            </button>
            <div className="get-app">
              <FaMobileAlt className="mobile-icon" />
              <p className="get-app-text">Get our app</p>
            </div>
          </div>
          <div className="footer-column">
            <p>Help</p>
            <p>Privacy Settings</p>
            <p>Log in</p>
          </div>
          <div className="footer-column">
            <p>Cookie policy</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
            <p>Company Details</p>
          </div>
          <div className="footer-column">
            {["Explore", "Company", "Partners", "Trips", "International Sites"].map((section, index) => (
              <div key={index} className="collapsible-section">
                <div className="collapsible-header" onClick={() => toggleSection(section)}>
                  <p>{section}</p>
                  <span className="collapsible-arrow">{expandedSections[section] ? "▼" : "▶"}</span>
                </div>
                {expandedSections[section] && (
                  <div className="collapsible-links">
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Compare and book cheap flights with Skyscanner</p>
        <p>© Skyscanner Ltd 2002 – 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
