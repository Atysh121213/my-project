import React, { useState, useRef } from 'react';
import './Contact.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Google Maps configuration
  const mapCenter = {
    lat: 19.0760,
    lng: 72.8777
  };

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Here's how you can reach us...</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-section">
          <div className="info-card">
            <div className="info-header">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Visit Us</h3>
            </div>
            <p>123 Mechanic Street</p>
            <p>Mumbai, Maharashtra 400001</p>
            <a href="https://maps.google.com" target="_blank" className="direction-link">
              Get Directions
            </a>
          </div>

          <div className="info-card">
            <div className="info-header">
              <FaClock className="info-icon" />
              <h3>Business Hours</h3>
            </div>
            <div className="hours-grid">
              <span>Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Saturday:</span>
              <span>10:00 AM - 4:00 PM</span>
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-header">
              <FaPhone className="info-icon" />
              <h3>Contact Info</h3>
            </div>
            <div className="contact-links">
              <a href="tel:+919876543210">
                <FaPhone /> +91 98765 43210
              </a>
              <a href="mailto:info@carcare.com">
                <FaEnvelope /> info@carcare.com
              </a>
              <a href="https://wa.me/919876543210" className="whatsapp-link">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="contact-main-content">
          <div className="map-section">
            <LoadScript googleMapsApiKey="AIzaSyDRwRPbFDl5R5-e7o7EbDUlhOEA_h-XgGU">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={mapCenter}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="contact-form-section">
            <h3>Send us a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 