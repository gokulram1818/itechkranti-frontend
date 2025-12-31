import { useState } from "react";
import "./chipperChase.css";
import { Link } from "react-router-dom";

const ChipperChase = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="event-details">
      {/* Header */}
      <div className="event-header">
        <h1>Cipher Chase</h1>
        <p>Rearrange code snippets to form a working program.</p>
      </div>

      <h2 className="section-title">Rules & Regulations</h2>

      <div className="accordion">
        {[
          {
            title: "General Rules",
            items: [
              "Each team must consist of 2 participants.",
              "Electronic devices are not allowed during the event.",
              "Participants must remain present until the event concludes.",
            ],
          },
          {
            title: "Preliminary Round",
            items: [
              "Images with hidden words will be displayed for 30 seconds.",
              "Participants should find the hidden words within the time limit.",
              "Based on number of words found teams will be selected for final round.",
            ],
          },
          {
            title: "Final Round",
            items: [
              "A sheet with jumbled keywords will be given for each team.",
              "Participants should arrange the keywords within the time limit.",
              "The overall time limit for this round is 5 minutes.",
              "The team will be awarded based on more number of words found.",
            ],
          },
        ].map((section, index) => (
          <div
            className={`accordion-item ${open === index ? "open" : ""}`}
            key={index}
          >
            <button onClick={() => toggle(index)}>
              {section.title}
              <span className="icon">{open === index ? "−" : "+"}</span>
            </button>

            <div className="accordion-content">
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="event-info-grid">
  <div className="info-card">
    <span>Date</span>
    <p>06/01/2026</p>
  </div>
  <div className="info-card">
    <span>Time</span>
    <p>1:00 PM - 2:00 PM</p>
  </div>
  <div className="info-card">
    <span>Venue</span>
    <p>E-block (E-108)</p>
  </div>
</div>

      <Link to="/register" className="register-link-btn">
        Register
      </Link>
    </section>
  );
};

export default ChipperChase;
