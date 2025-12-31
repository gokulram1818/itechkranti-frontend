import { useEffect, useState, useRef } from "react";
import "./Countdown.css";

const Countdown = ({ eventDate }) => {
  const countdownRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (countdownRef.current) observer.observe(countdownRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={countdownRef}
      className={`countdown-wrapper ${visible ? "show" : ""}`}
    >
      {timeLeft ? (
        <div className="countdown-container">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div className="time-box" key={label}>
              <h2>{value}</h2>
              <span>{label.toUpperCase()}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="registration-closed">
          <h2>Registration Closed</h2>
          <p>The event has already started.</p>
        </div>
      )}
    </div>
  );
};

export default Countdown;
