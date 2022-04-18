import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ services }) => {
  const {name,img,price,description} = services;
  
  return (
    <>
      <div className="col-lg-4 col-md-6  my-5">
        <div className="card h-100">
          <img src={img} className="card-img-top h-75" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="">Price: {price}</h6>
            <p className="card-text">
             {description}
            </p>
            <Link to="/checkout " className="btn btn-info ">
              Take Schedule
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;