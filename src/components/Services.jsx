import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    { title: "Backend Development", icon: faServer, description: "Building robust backend and scalable solutions." },
    { title: "API REST Development", icon: faCodeBranch, description: "Creating RESTful APIs for seamless communication." },
    { title: "Database Management", icon: faDatabase, description: "Managing and optimizing databases for performance." }
  ];

  return (
    <div className="services-container text-center" id='services'>
      <h2 className="text-orange">My Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="service-card d-flex flex-column justify-content-between"> 
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p className="parrafos">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
