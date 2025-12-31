import { Link } from "react-router-dom";
import "./Events.css";

const events = [
  {
    slug: "codeRelay",
    name: "CODE RELAY",
    description: "A teamwork-based coding challenge testing speed and logic.",
    icon: "/events/code-relay-logo.png",
    date: "06/01/2026",
    time: "10:15 AM - 11.15 AM",
    venue: "E-block (E-211)",
  },
  {
    slug: "cipherChase",
    name: "CIPHER CHASE",
    description: "Arrange shuffled code blocks into a working program.",
    icon: "/events/chipper-chase-logo.png",
    date: "06/01/2026",
    time: "1:00 PM - 2:00 PM",
    venue: "E-block (E-108)",
  },
  {
    slug: "promptEngineering",
    name: "PROMPT MASTERS",
    description: "Master the art of AI communication to manifest visual excellence.",
    icon: "/events/prompt-logo.png",
    date: "06/01/2026",
    time: "11:45 AM - 12:45 PM",
    venue: "E-block(E-211)",
  },
  {
    slug: "memeMania",
    name: "MEME MANIA",
    description: "Unleash your wit and humor in the ultimate meme-making showdown.",
    icon: "https://cdn-icons-png.flaticon.com/512/4727/4727496.png",
    date: "06/01/2026",
    time: "11:45 AM - 12:45 PM",
    venue: "E-block (E-107)",
  },
  {
    slug: "mindScape",
    name: "MINDSCAPE",
    description: "Challenge your perception and problem-solving skills through technical puzzles.",
    icon: "/events/mindscape-logo.png",
    date: "06/01/2026",
    time: "10:15 AM - 11:15 AM",
    venue: "E-block (E-106)",
  },
  {
    slug: "techSpirit",
    name: "TECH SPIRIT",
    description: "A high-speed mental and technical battleground testing logic and coding efficiency.",
    icon: "/events/tech-spirit-logo.png",
    date: "06/01/2026",
    time: "10:15 AM - 1:15 PM",
    venue: "E-block (E-107)",
  },
];

const rules = [
  "Participants must carry a college ID card.",
  "Each team must consist of 2 members.",
  "Each event will consist of two rounds.",
  "Online registration is mandatory for all events.",
  "Late entries will not be entertained.",
  "Judge's decisions will be final.",
  "Students from any computer science department can participate.",
  "Top 5 teams will be selected for final round.",
];

const Events = () => {
  return (
     <div className="events-page">
      <div className="bg g1"></div>
      <div className="bg g2"></div>

      <section className="title">
        <h2>Events</h2>
        <span></span>
      </section>

    
      <section className="events container">
        <div className="row g-4">
          {events.map((event) => (
            <div
              key={event.slug}
              className="col-12 col-sm-6 col-lg-4"
            >
              <Link to={`/events/${event.slug}`} className="event-link">
                <div className="flip-card">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img src={event.icon} alt={event.name} />
                      <h3>{event.name}</h3>
                      <p>{event.description}</p>
                    </div>

                    <div className="flip-back">
                      <h2>{event.name}</h2>
                      <h3>Date : {event.date}</h3>
                      <h3>Time : {event.time}</h3>
                      <h3>Venue : {event.venue}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      
      <section className="rules-wrapper">
        <div className="rules-title">General Rules</div>
        <div className="rules-grid">
          {rules.map((rule, index) => (
            <div className="rule-card" key={index}>
              <div className="check">✓</div>
              <p>{rule}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
