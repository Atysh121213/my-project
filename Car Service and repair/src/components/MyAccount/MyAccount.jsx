import React, { useState } from 'react';
import './MyAccount.css';
import { FaUser, FaHistory, FaShoppingBag, FaStar, FaSignOutAlt } from 'react-icons/fa';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Mock data - replace with actual data from your backend
  const bookings = [
    {
      id: 1,
      service: "Regular Maintenance",
      date: "2024-03-15",
      time: "10:00 AM",
      status: "Completed",
      rating: 4
    },
    {
      id: 2,
      service: "Brake Service",
      date: "2024-03-20",
      time: "02:30 PM",
      status: "Pending"
    }
  ];

  const orders = [
    {
      id: 1,
      items: ["Engine Oil Filter", "Brake Pads"],
      date: "2024-03-10",
      total: 2499,
      status: "Delivered"
    },
    {
      id: 2,
      items: ["Air Filter"],
      date: "2024-03-18",
      total: 999,
      status: "Processing"
    }
  ];

  const handleRating = (bookingId, rating) => {
    console.log(`Rating ${rating} stars for booking ${bookingId}`);
    // Add your rating logic here
  };

  const renderStars = (rating, bookingId) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`star ${index < (rating || 0) ? 'filled' : ''}`}
        onClick={() => handleRating(bookingId, index + 1)}
      />
    ));
  };

  const renderProfile = () => (
    <div className="profile-section">
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUser />
        </div>
        <div className="profile-info">
          <h3>John Doe</h3>
          <p>john.doe@example.com</p>
        </div>
      </div>
      <div className="profile-details">
        <div className="detail-group">
          <label>Full Name</label>
          <input type="text" value="John Doe" readOnly />
        </div>
        <div className="detail-group">
          <label>Email</label>
          <input type="email" value="john.doe@example.com" readOnly />
        </div>
        <div className="detail-group">
          <label>Phone</label>
          <input type="tel" value="+91 98765 43210" readOnly />
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="bookings-section">
      <h3>Service Bookings</h3>
      <div className="bookings-list">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-card">
            <div className="booking-info">
              <h4>{booking.service}</h4>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <span className={`status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </div>
            {booking.status === "Completed" && (
              <div className="rating">
                <p>Rate your service:</p>
                <div className="stars">
                  {renderStars(booking.rating, booking.id)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="orders-section">
      <h3>Your Orders</h3>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span>Order #{order.id}</span>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className="order-items">
              {order.items.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
            <div className="order-footer">
              <span>Date: {order.date}</span>
              <span className="total">Total: ₹{order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-account">
      <div className="account-container">
        <div className="sidebar">
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Profile
          </button>
          <button 
            className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <FaHistory /> Bookings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <FaShoppingBag /> Orders
          </button>
          <button className="tab-btn logout">
            <FaSignOutAlt /> Logout
          </button>
        </div>
        <div className="content">
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'bookings' && renderBookings()}
          {activeTab === 'orders' && renderOrders()}
        </div>
      </div>
    </div>
  );
};

export default MyAccount; 