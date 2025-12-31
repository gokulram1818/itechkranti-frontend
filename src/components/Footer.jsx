import { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${visible ? "footer-show" : ""}`}
    >
      <div className="container">
        <div className="row gy-4 align-items-start">

          <div className="col-md-6">
            <h5 className="footer-title">iTechKranti&apos;26</h5>

            <p className="footer-text">
              © 2026 iTechKranti&apos;26. All rights reserved.
            </p>

            <div className="footer-contact">
              <a
                href="https://instagram.com/bsc_it_psgcas"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="bi bi-instagram"></i>
                <span>bsc_it_psgcas</span>
              </a>

              <a
                href="mailto:smani32006@gmail.com"
                className="footer-link"
              >
                <i className="bi bi-envelope"></i>
                <span>insafahmed309@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="footer-title">Contact</h5>

            <div className="row">
              <div className="col-sm-6">
                <p className="footer-subtitle">For Registration</p>
                <p>Gokul – 8668017837</p>
                <p>Insaf – 9344478089</p>
              </div>

              <div className="col-sm-6">
                <p className="footer-subtitle">For Event Details</p>
                <p>Kamesh D – 7397146622</p>
                <p>Rohit – 9500975884</p>
              </div>
            </div>
          </div>

        </div>
        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          Designed & Developed for iTechKranti&apos;26
        </div>
      </div>
    </footer>
  );
};

export default Footer;
