import { useState } from "react";
import { Link } from "react-router-dom";
import "./techSpirit.css";

const TechSpirit = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "General Rules",
      items: [
        "The event consists of two rounds with 2 members per team.",
        "Internet usage, electronic gadgets, plagiarism, or copying are strictly prohibited.",
        "Late entry is not allowed, and the time limit must be strictly followed.",
        "ID card is mandatory for all participants."
      ],
    },
    {
      title: "Round 1: Brain Bytes",
      items: [
        "Timing: 10:00 - 10:45 AM at Venue E-107.",
        "Format: 30 basic Aptitude questions.",
        "Each question is displayed on the screen for only 45 seconds.",
        "Participants must write answers only in the provided sheets.",
        "Elimination: Top 6 teams will be selected for the next round."
      ],
    },
    {
      title: "Round 2: Concept to Code Challenge",
      items: [
        "Timing: 2:00 - 3:00 PM at Venue E-208 (Lab).",
        "Task: Teams are provided with 4 questions and must compulsorily attempt any 3.",
        "Flexibility: Participants can use any programming language of their choice.",
        "Judging: Evaluation is based on the time taken to produce the correct output.",
        "The judges' decision will be final."
      ],
    },
  ];

  return (
    <section className="event-details">
      <div className="event-header">
        <h1>TECH SPIRIT</h1>
        <p>A high-speed mental and technical battleground testing logic and coding efficiency.</p>
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
          <p>10:15 AM - 1:15 PM</p>
        </div>
        <div className="info-card">
          <span>Venue</span>
          <p>E-block (E-107)</p>
        </div>
        
      </div>

      <Link to="/register" className="register-link-btn">
        Register
      </Link>
    </section>
  );
};

export default TechSpirit;