import React from 'react';
import Banner from '../Banner/Banner';
import GetUpdates from '../GetUpdates/GetUpdates';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div className="">
      <div className="container">
        <Banner />
      </div>
      <div className="container">
     
            <Services />
      </div>
      <div className="container">
        <GetUpdates />
      </div>
        </div>
      
  );
};

export default Home;