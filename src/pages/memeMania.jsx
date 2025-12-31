import { useState } from "react";
import { Link } from "react-router-dom";
import "./memeMania.css";

const MemeMania = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "General Rules",
      items: [
        "The event consists of two rounds.",
        "Participants can participate individually or in teams of 2.",
        "Use of mobile phones or laptops is allowed only for meme creation.",
        "Offensive, political, or sensitive content is strictly prohibited."
      ],
    },
    {
      title: "Round 1: Template to Meme",
      items: [
        "Time Limit: 10-15 minutes.",
        "Participants will be provided with pre-designed meme templates.",
        "They must create a meme by adding suitable captions.",
        "Only one meme per template is allowed.",
        "Submit the meme to the given mail-id.",
        "Judged based on creativity and relevance."
      ],
    },
    {
      title: "Round 2: Situation to Meme",
      items: [
        "Time Limit: 10-15 minutes.",
        "Participants will be given a real-life or technical situation.",
        "Participants can choose their own images and captions.",
        "Only one meme submission is allowed per participant/team.",
        "Judges' decision will be final."
      ],
    },
  ];

  return (
    <section className="event-details">
      <div className="event-header">
        <h1>MEME MANIA</h1>
        <p>Unleash your wit and humor in the ultimate meme-making showdown.</p>
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
          <p>11:45 AM - 12:45 PM</p>
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

export default MemeMania;