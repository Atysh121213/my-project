import React, { useState } from 'react';
import './Rating.css';
import { FaStar, FaTimes } from 'react-icons/fa';

const Rating = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rating submitted:', { rating, feedback });
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setRating(0);
      setFeedback('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="rating-overlay">
      <div className="rating-modal">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {!submitted ? (
          <>
            <h2>Rate Our Service</h2>
            <p>How would you rate your experience with us?</p>

            <div className="stars-container">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      className="star"
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={40}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  placeholder="Tell us about your experience (optional)"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows="4"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={rating === 0}
              >
                Submit Rating
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating; 