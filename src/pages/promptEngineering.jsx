import { useState } from "react";
import { Link } from "react-router-dom";
import "./promptEngineering.css";

const PromptEngineering = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "General Rules",
      items: [
        "This is a team-based event consisting of 2 participants per team[cite: 11, 12].",
        "Participants are allowed to use any AI tools (text-to-image or multimodal)[cite: 13].",
        "Plagiarism or rule violations lead to immediate disqualification[cite: 14].",
        "The judges' decision will be final and binding[cite: 15]."
      ],
    },
    {
      title: "Round 1: Preliminary Round",
      items: [
        "Time Limit: 30 minutes[cite: 17].",
        "Objective: Interrelate two different topics into a single AI-generated image[cite: 19, 20].",
        "Constraint: The prompt length must not exceed 120 characters[cite: 22].",
        "Only one final image must be submitted for judging[cite: 23].",
        "Judged on: Creativity, relevance, and prompt effectiveness[cite: 25, 26, 27]."
      ],
    },
    {
      title: "Round 2: Final Round",
      items: [
        "Time Limit: 30 minutes[cite: 29].",
        "Objective: Analyze a reference image and create prompts to recreate a similar image[cite: 31, 32, 33].",
        "Criteria: Image must closely match composition, theme, visual elements, and style[cite: 34, 35].",
        "Judged on: Prompt accuracy, similarity to reference, and attention to detail[cite: 38, 39, 40]."
      ],
    },
  ];

  return (
    <section className="event-details">
      <div className="event-header">
        <h1>PROMPT MASTERS</h1>
        <p>Master the art of AI communication to manifest visual excellence.</p>
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

      {/* Luxury Info Grid from documentation */}
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
          <p>E-block(E-211)</p>
        </div>
      </div>

      <Link to="/register" className="register-link-btn">
        Register
      </Link>
    </section>
  );
};

export default PromptEngineering;