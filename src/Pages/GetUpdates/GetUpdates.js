import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import update from "../../../src/images/updates.jpg";

const GetUpdates = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/thankyou");
    } else {
      alert("Please enter email");
    }
  };
  return (
    <div>
      <div className="row my-5">
        <div className="col-md-6 col-lg-6">
          <img className="w-100 rounded  mx-lg-3 " src={update} alt="" />
        </div>
        <div className="col-md-6 col-lg-6 col-lg-6 ">
          <h1 className="name text-center my-lg-5 mt-5">
            Get The Latest Updates{" "}
          </h1>
          <div className="input-group mb-3 w-75 mx-auto my-5">
            <input
              onBlur={handleEmailBlur}
              type="text"
              className="form-control "
              placeholder="Enter Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            ></input>
            <button
              onClick={handleSubmit}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdates;
