import React, { useState } from "react";
import "../userstyles/faq.css";

const faqData = [
  { question: "How does Skyscanner work?", answer: "Skyscanner compares prices from different travel sites to find the best deals." },
  { question: "How can I find the cheapest flight using Skyscanner?", answer: "Use the 'Everywhere' search or set up price alerts for the best deals." },
  { question: "Where should I book a flight to right now?", answer: "Check trending destinations and last-minute deals on Skyscanner." },
  { question: "Do I book my flight with Skyscanner?", answer: "No, we direct you to airlines or travel agencies to complete your booking." },
  { question: "What happens after I have booked my flight?", answer: "You will receive a confirmation email from the airline or travel agency." },
  { question: "Does Skyscanner do hotels too?", answer: "Yes, we compare hotel prices from multiple providers." },
  { question: "What about car hire?", answer: "You can search and compare rental car prices with Skyscanner." },
  { question: "What's a Price Alert?", answer: "Price Alerts notify you when flight prices change for your selected route." },
  { question: "Can I book a flexible flight ticket?", answer: "Yes, look for airlines offering flexible booking options." },
  { question: "Can I book flights that emit less CO₂?", answer: "Yes, Skyscanner highlights eco-friendly flights with lower carbon emissions." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Booking flights with Skyscanner</h2>
      <div className="faq-container">
        <div className="faq-column">
          {faqData.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <p className="faq-question">{faq.question}</p>
              <span className="faq-arrow">{activeIndex === index ? "▼" : "▶"}</span>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-column">
          {faqData.slice(5).map((faq, index) => (
            <div
              key={index + 5}
              className={`faq-item ${activeIndex === index + 5 ? "active" : ""}`}
              onClick={() => toggleFAQ(index + 5)}
            >
              <p className="faq-question">{faq.question}</p>
              <span className="faq-arrow">{activeIndex === index + 5 ? "▼" : "▶"}</span>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
