import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">
            <span className="highlight">P</span>atel's Car🚘
          </h2>
          <p className="footer-desc">
            It's a never ending battle of making your cars better 
            and also trying to be better yourself.
          </p>

          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <h3>Account</h3>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Billing</li>
            <li>Notifications</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>About</h3>
          <ul>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>Community</li>
            <li>Help Center</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved by Carly Rent</p>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
