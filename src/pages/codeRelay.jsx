import { useState } from "react";
import { Link } from "react-router-dom";
import "./CodeRelay.css";

const CodeRelay = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "General Rules",
      items: [
        "Registrations are implemented through the website only.",
        "Free Registrations.",
        "Two participants per team.",
        "Cash prizes will be awarded to the winners."
      ],
    },
    {
      title: "Round 1: Think with Tech",
      items: [
        "Objective: Pass a quiz on basic programming skills within 45 minutes.",
        "Format: Participants will be given 30 questions.",
        "Each question must be answered within 45 seconds.",
        "Elimination: Top 6 teams will be selected for the next round."
      ],
    },
    {
      title: "Round 2: Relay Round",
      items: [
        "Objective: Teamwork-based coding challenge.",
        "Tools: C, C++, JAVA.",
        "Format: Each team will receive 1 question.",
        "Member will switch the coding every 3 minutes.",
        "No communication allowed between teammates.",
        "In case of a tie, one more question will be given following the same procedure."
      ],
    },
  ];

  return (
    <section className="event-details">
      <div className="event-header">
        <h1>CODE RELAY</h1>
        <p>A teamwork-based coding challenge testing speed and logic.</p>
      </div>

      <h2 className="section-title">Rules & Regulations</h2>

      <div className="accordion">
        {sections.map((section, index) => (
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

      {/* Structured Info Grid from the provided data */}
      <div className="event-info-grid">
        <div className="info-card">
          <span>Date</span>
          <p>06/01/2026</p>
        </div>
        <div className="info-card">
          <span>Time</span>
          <p>10:15 AM - 11.15 AM</p>
        </div>
        <div className="info-card">
          <span>Venue</span>
          <p>E-block (E-211)</p>
        </div>
      </div>

      <Link to="/register" className="register-link-btn">
        Register
      </Link>
    </section>
  );
};

export default CodeRelay;