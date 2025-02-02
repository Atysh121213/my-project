import React from 'react';
import './Spares.css';
import enginePart from '../../assets/enginepart.jpg';
import brakePart from '../../assets/brakes.jpeg';
import filterPart from '../../assets/filteroils.jpg';
import { useCart } from '../../context/CartContext';

const Spares = () => {
  const { addToCart } = useCart();

  const spares = [
    {
      id: 1,
      image: enginePart,
      name: "Engine Parts",
      description: "High-quality engine components for optimal performance",
      price: 19999
    },
    {
      id: 2,
      image: brakePart,
      name: "Brake Systems",
      description: "Premium brake pads and rotors for maximum safety",
      price: 14999
    },
    {
      id: 3,
      image: filterPart,
      name: "Filters & Oil",
      description: "Essential maintenance parts for your vehicle",
      price: 4999
    }
  ];

  const handleAddToCart = (spare) => {
    addToCart(spare);
  };

  return (
    <section className="spares" id="spares">
      <div className="container">
        <h2 className="section-title">Spare Parts</h2>
        <div className="spares-grid">
          {spares.map((spare) => (
            <div className="spare-card" key={spare.id}>
              <img src={spare.image} alt={spare.name} />
              <div className="spare-info">
                <h3>{spare.name}</h3>
                <p>{spare.description}</p>
                <div className="spare-price">
                  <span>₹{spare.price}</span>
                  <button 
                    className="buy-btn"
                    onClick={() => handleAddToCart(spare)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spares; 