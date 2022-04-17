import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <form className="w-50 border rounded-3 p-lg-5 p-2">
        <h1 className="text-center mt-3 mb-4 name">Login</h1>
        <div className="mb-3  ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control  "
            id="exampleInputPassword1"
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
        
          <button type="submit" className="btn btn-primary  ">
            Login
          </button>
        </div>
        <div className="d-flex my-3">
          <p>Don't have an account? <Link to="/register" className="fw-bold p-2 text-decoration-none name" >Signup</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
