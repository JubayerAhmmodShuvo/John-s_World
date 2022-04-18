import React from 'react';
import UseServices from '../hooks/UseServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
  const [services, setServices] = UseServices();
  return (
    <>
      <h2 className="text-center fw-bold my-4 fs-1 name" >Best Services</h2>
      <div className="row">
        
          {services.map((services) => (
            <SingleService key={services.id} services={services} />
          ))}
        </div>
      
    </>
  );
};

export default Services;