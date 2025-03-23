import React, { useState } from "react";
import "../userstyles/internationalsites.css";
import Flag from "react-world-flags";

const internationalSites = [
  { country: "GB", name: "Cheap flights" },
  { country: "IN", name: "India - Flight tickets" },
  { country: "RU", name: "Россия - авиабилеты" },
  { country: "AU", name: "Australia - Cheap flights" },
  { country: "JP", name: "日本 - 航空券" },
  { country: "US", name: "USA - flights" },
  { country: "CN", name: "中国 - 机票" },
  { country: "MX", name: "México - vuelos" },
];

const InternationalSites = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSites = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="international-sites">
      <div className="sites-header" onClick={toggleSites}>
        <h2 className="sites-title">
          Our international sites
          <span className="sites-arrow">{isExpanded ? "▼" : "▶"}</span>
        </h2>
      </div>
      {isExpanded && (
        <div className="sites-container">
          {internationalSites.map((site, index) => (
            <div key={index} className="site-item">
              <Flag code={site.country} className="site-flag" />
              <span className="site-text">{site.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InternationalSites;
