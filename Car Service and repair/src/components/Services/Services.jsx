import React from 'react';
import './Services.css';
import serviceImg1 from '../../assets/service-1.jpg';
import serviceImg2 from '../../assets/service-2.jpg';
import serviceImg3 from '../../assets/service-3.jpg';

const Services = () => {
  const services = [
    {
      image: serviceImg1,
      title: "Regular Maintenance",
      description: "Comprehensive maintenance service to keep your vehicle in perfect condition."
    },
    {
      image: serviceImg2,
      title: "Repair Services",
      description: "Expert repair services for all types of mechanical and electrical issues."
    },
    {
      image: serviceImg3,
      title: "Parts Replacement",
      description: "Quality replacement parts and professional installation services."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 