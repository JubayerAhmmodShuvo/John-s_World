import React from 'react';
import UseServices from '../hooks/UseServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
  const [services, setServices] = UseServices();
  return (
    <>
      <div className="row">
        
          {services.map((services) => (
            <SingleService key={services.id} services={services} />
          ))}
        </div>
      
    </>
  );
};

export default Services;