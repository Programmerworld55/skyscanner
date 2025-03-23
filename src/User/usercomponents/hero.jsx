import React from "react";
import "../userstyles/hero.css";
import { FaExchangeAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="hero-heading">Millions of cheap flights. One simple search.</h1>
        <div className="multi-city-route">
          <span>↻ Create a multi-city route</span>
        </div>
        <div className="search-form">
          <div className="search-container">
            {/* FROM */}
            <div className="search-item">
              <label>From</label>
              <input type="text" className="form-control" placeholder="Country, city or airport" />
            </div>

            {/* EXCHANGE ICON */}
            <div className="exchange-icon">
              <button className="exchange-btn">
                <FaExchangeAlt />
              </button>
            </div>

            {/* TO */}
            <div className="search-item">
              <label>To</label>
              <input type="text" className="form-control" placeholder="Country, city or airport" />
            </div>

            {/* DEPART */}
            <div className="search-item">
              <label>Depart</label>
              <input type="text" className="form-control" placeholder="Add date" />
            </div>

            {/* RETURN */}
            <div className="search-item">
              <label>Return</label>
              <input type="text" className="form-control" placeholder="Add date" />
            </div>

            {/* TRAVELERS & CLASS */}
            <div className="search-item">
              <label>Travellers and cabin class</label>
              <input type="text" className="form-control" value="1 Adult, Economy" readOnly />
            </div>

            {/* SEARCH BUTTON */}
            <button className="search-btn">Search</button>
          </div>

          {/* CHECKBOXES */}
          <div className="checkboxes">
            <label>
              <input type="checkbox" /> Add nearby airports (From)
            </label>
            <label>
              <input type="checkbox" /> Add nearby airports (To)
            </label>
            <label>
              <input type="checkbox" /> Direct flights
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
