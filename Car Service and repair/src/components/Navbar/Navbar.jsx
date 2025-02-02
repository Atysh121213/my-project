import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaHome, FaInfoCircle, FaPhone, FaTools, FaCalendarCheck, FaStar, FaSignOutAlt } from 'react-icons/fa'
import Cart from '../Cart/Cart'
import { useCart } from '../../context/CartContext'
import AuthModal from '../Auth/AuthModal'
import { Link } from 'react-router-dom'

const Navbar = ({ onRateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
          </div>

          <div className={`navbar-right ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-links">
              <li className="nav-item">
                <Link to="/" onClick={(e) => handleNavClick(e, 'home')}>
                  <FaHome className="nav-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" onClick={(e) => handleNavClick(e, 'about')}>
                  <FaInfoCircle className="nav-icon" />
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" onClick={(e) => handleNavClick(e, 'services')}>
                  <FaTools className="nav-icon" />
                  <span>Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/spares" onClick={(e) => handleNavClick(e, 'spares')}>
                  <FaTools className="nav-icon" />
                  <span>Spares</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  <FaPhone className="nav-icon" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

            <div className="navbar-actions">
              <button className="action-btn rate-btn" onClick={onRateClick}>
                <FaStar className="action-icon" />
                <span className="action-label">Rate Us</span>
              </button>
              
              <button className="action-btn book-btn" onClick={(e) => handleNavClick(e, 'book')}>
                <FaCalendarCheck className="action-icon" />
                <span className="action-label">Book Now</span>
              </button>

              <div className="nav-buttons">
                <button className="auth-btn" onClick={() => setAuthOpen(true)}>
                  <FaUser className="action-icon" />
                </button>
                <button className="cart-btn" onClick={() => setCartOpen(true)}>
                  <FaShoppingCart className="action-icon" />
                  {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )
}

export default Navbar
