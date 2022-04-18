import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name && phone) {
      navigate("/thankyou");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <div className="container  my-5 border rounded w-50 ">
        <form onSubmit={handleSubmit} >
          <div className="form-group my-3">
            <input
              onBlur={handleNameBlur}
              type="text"
              className="form-control my-3 "
              id="exampl"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
            />

            <input
              onBlur={handleEmailBlur}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group my-3">
            <input
              onBlur={handlePhoneBlur}
              type="text"
              className="form-control "
              id="exampleInputPassword1"
              placeholder="Phone Number"
            />
          </div>

          <button
            
            type="submit"
            className="btn btn-primary my-3 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
