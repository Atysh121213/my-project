import React from 'react';
import './Cart.css';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log('Proceeding to checkout with items:', cartItems);
    // You could redirect to a checkout page or open a checkout modal
    alert('Thank you for your order! Total: ₹' + total);
    // Clear cart and close it after order
    cartItems.forEach(item => removeFromCart(item.id));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTimes />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button 
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={handleCheckout}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 