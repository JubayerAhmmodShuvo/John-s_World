import React from 'react';
import { Link } from 'react-router-dom';
import update from "../../../src/images/updates.jpg";

const GetUpdates = () => {
  return (
    <div>
      <div className="row my-5">
        <div className="col-md-6 col-lg-6">
          <img className="w-100 rounded  mx-lg-3 " src={update} alt="" />
        </div>
        <div className="col-md-6 col-lg-6 col-lg-6 ">
          <h1 className="name text-center my-lg-5 mt-5">Get The Latest Updates  </h1>
          <div className="input-group mb-3 w-75 mx-auto my-5">
  <input type="text" className="form-control " placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  <Link to="/thankyou" className="btn btn-outline-secondary" type="button" id="button-addon2">Get Updates</Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdates;