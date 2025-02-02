import React, { useState } from 'react';
import './Auth.css';
import { FaTimes, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ isOpen, onClose, onLogin, message }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock authentication
    if (isLogin) {
      const mockToken = 'mock-jwt-token';
      const mockUser = {
        id: 1,
        name: formData.name || 'John Doe',
        email: formData.email
      };
      onLogin(mockToken, mockUser);
      onClose();
      navigate('/account'); // Navigate to account page after login
    } else {
      const mockToken = 'mock-jwt-token';
      const mockUser = {
        id: 1,
        name: formData.name,
        email: formData.email
      };
      onLogin(mockToken, mockUser);
      onClose();
      navigate('/account'); // Navigate to account page after registration
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className={`auth-modal ${message ? 'reminder' : ''}`}>
        <button className="close-modal" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="auth-container">
          {/* Left Side - Image/Info */}
          <div className="auth-info">
            <h2>{isLogin ? 'Welcome Back!' : 'Join Us!'}</h2>
            <p>
              {message || (isLogin 
                ? 'Access your account and manage your services' 
                : 'Create an account to get started')}
            </p>
            <div className="auth-image"></div>
          </div>

          {/* Right Side - Form */}
          <div className="auth-form-container">
            <h3>{isLogin ? 'Login' : 'Create Account'}</h3>
            
            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>
              )}
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <FaLock className="input-icon" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
              </div>
              {!isLogin && (
                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <FaLock className="input-icon" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>
              )}
              
              {error && <p className="error-message">{error}</p>}
              
              {isLogin && (
                <div className="form-extra">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="forgot-password">
                    Forgot password?
                  </button>
                </div>
              )}
              
              <button type="submit" className="submit-btn">
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </form>
            
            <p className="switch-auth">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({
                  email: '',
                  password: '',
                  name: '',
                  confirmPassword: ''
                });
              }}>
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 