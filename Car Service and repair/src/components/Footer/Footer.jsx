import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaUser,
  FaShoppingCart,
  FaStar,
  FaSignOutAlt
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = ({ onRateClick, onCartClick, onAuthClick, onLogout }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="company-description">
            Your trusted partner in automotive care. We provide professional car services
            and maintenance to keep your vehicle running at its best.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/ShenronDragon7?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@Velocityvibes72" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/velocityvibes_72?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><span>Home</span></Link></li>
            <li><Link to="/services"><span>Services</span></Link></li>
            <li><Link to="/about"><span>About Us</span></Link></li>
            <li><Link to="/spares"><span>Buy Spares</span></Link></li>
            <li><Link to="/contact"><span>Contact</span></Link></li>
          </ul>
        </div>

        {/* User Links */}
        <div className="footer-section">
          <h3>User Menu</h3>
          <ul className="footer-links">
            <li>
              <button className="footer-button" onClick={onAuthClick}>
                <FaUser />
                <span>My Account</span>
              </button>
            </li>
            <li>
              <button className="footer-button" onClick={onCartClick}>
                <FaShoppingCart />
                <span>Go to Cart</span>
              </button>
            </li>
            <li>
              <button className="footer-button" onClick={onRateClick}>
                <FaStar />
                <span>Rate Us</span>
              </button>
            </li>
            <li>
              <button className="footer-button" onClick={onLogout}>
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p><FaPhoneAlt /> <span>+91 98765 43210</span></p>
            <p><FaEnvelope /> <span>info@carcare.com</span></p>
            <p><FaMapMarkerAlt /> <span>123 Mechanic Street, Mumbai, Maharashtra 400001</span></p>
            <p><FaClock /> <span>Mon - Sat: 9:00 AM - 6:00 PM</span></p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Car Care. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 