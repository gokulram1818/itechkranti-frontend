import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import Countdown from "../components/Countdown";

const Home = () => {

  // Scroll animation for event cards
  useEffect(() => {
    const cards = document.querySelectorAll(".event-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    
      <section className="home">
        <video autoPlay muted loop id="home-video">
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div className="home-overlay">
          <div className="container text-center text-white">

            <div className="college-header mb-4">
      <img src="/psg-logo.png" alt="PSG Logo" className="event-logo" />
      <h1 className="college-name">
        PSG COLLEGE OF ARTS & SCIENCE
      </h1>
      <img src="/psg-icon.png" alt="PSG Icon" className="event-logo" />
    </div>

            <h5 className="department-name my-3">
      DEPARTMENT OF INFORMATION TECHNOLOGY
    </h5>

            <p className="organizes-text fs-3">Organizes</p>

            <h1 className="event-title my-4">
              iTechKranti '26
            </h1>

            <p className="event-subtitle mb-4">
              AN INTER DEPARTMENTAL COMPETITION
            </p>

            <Link
              to="/register"
              className="btn register-btn px-5 py-2 rounded-pill mt-3"
            >
              Register
            </Link>

          </div>
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      <section className="countdown-section">
        <div className="container text-center">
          <h2 className="countdown-title mb-5 fs-1">
            Event Starts In
          </h2>
          <Countdown eventDate="2026-01-06T00:00:00" />
        </div>
      </section>

      
      <section className="events-section">
        <div className="container">
          <h2 className="text-center events-title mb-5 fs-1">
            Events
          </h2>

          <div className="row g-4">
            {[
              { name: "Cipher Chase", path: "chipperChase",image: "/events/chipper-chase.jpeg" },
              { name: "Code Relay", path: "codeRelay", image: "/events/code-relay.png" },
              { name: "Prompt Masters", path: "promptEngineering", image: "/events/prompt_engineering.png" },
              { name: "Meme Mania", path: "memeMania", image: "/events/meme-mania.jpeg" },
              { name: "Mindscape", path: "mindScape", image: "/events/mindscape.jpeg" },
              { name: "Tech spirit", path: "techSpirit", image: "/events/tech-sprit.jpeg" },
            ].map((event) => (
              <div  className="col-12 col-sm-6 col-lg-4" key={event.path}>
                <Link
                  to={`/events/${event.path}`}
                  className="event-card-link"
                >
                  <div className="card event-card h-100 event-animate">
                    <img
                      src={event.image}
                      className="card-img-top event-img"
                      alt={event.name}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{event.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
