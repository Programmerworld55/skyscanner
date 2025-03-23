import React from "react";
import "../userstyles/promotionalsection.css";

const PromotionalSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-outer-container">
        <div className="promo-container">
          <div className="promo-content">
            <h2 className="promo-title">Explore every destination</h2>
            <p className="promo-subtitle">Find the best flights, hotels, and car rentals.</p>
            <button className="promo-btn">Search Flights Everywhere</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
