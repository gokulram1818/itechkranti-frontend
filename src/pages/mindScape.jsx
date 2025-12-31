import { useState } from "react";
import { Link } from "react-router-dom";
import "./mindScape.css";

const Mindscape = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "General Rules",
      items: [
        "Registrations are done through the website only.",
        "Free registration.",
        "Use of mobile phones is strictly prohibited during the event.",
        "Cash prizes will be awarded to the winners.",
        "Two participants per team."
      ],
    },
    {
      title: "Round 1: Spot the Tech",
      items: [
        "Time Duration: 20 minutes.",
        "Participants will be provided with 'Who Am I?' and image-based questions.",
        "Answers must be written within the given time.",
        "Top 5 teams will be selected for the next round."
      ],
    },
    {
      title: "Round 2: Patch & Match",
      items: [
        "Time Duration: 30 minutes.",
        "Task 1: Participants must correctly arrange the provided puzzle.",
        "Task 2: Match Tech-related problems with appropriate solutions within the given time."
      ],
    },
  ];

  return (
    <section className="event-details">
      <div className="event-header">
        <h1>MINDSCAPE</h1>
        <p>Challenge your perception and problem-solving skills through technical puzzles.</p>
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

      <div className="event-info-grid">
        <div className="info-card">
          <span>Date</span>
          <p>06/01/2026</p>
        </div>
        <div className="info-card">
          <span>Time</span>
          <p>10:15 AM - 11:15 AM</p>
        </div>
        <div className="info-card">
          <span>Venue</span>
          <p>E-block (E-106)</p>
        </div>
      </div>

      <Link to="/register" className="register-link-btn">
        Register
      </Link>
    </section>
  );
};

export default Mindscape;