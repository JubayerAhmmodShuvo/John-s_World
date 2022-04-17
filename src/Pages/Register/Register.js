import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../Firebase.init';

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error2, setError] = useState("");
   const navigate = useNavigate();
  if (loading) {
    return <p className="text-center" >Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }
    const handleEmailBlur = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordBlur = (e) => {
      setPassword(e.target.value);
  };
   const handleConfirmPasswordBlur = (e) => {
     setConfirmPassword(e.target.value);
   };
   const handleRegister = (e) => {
     e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);

    setEmail(" ");
    
    setPassword(" ");
    setConfirmPassword(" ");
    
   };



  
  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <form
        onSubmit={handleRegister}
        className="w-50 border rounded-3 p-lg-5 p-2"
      >
        <h1 className="text-center mt-3 mb-4 name">Register</h1>
        <div className="mb-3  ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={handleEmailBlur}
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
            onBlur={handlePasswordBlur}
            type="password"
            className="form-control  "
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            onBlur={handleConfirmPasswordBlur}
            type="password"
            className="form-control  "
            id="exampleInputPassword1"
          />
        </div>
        <p style={{ color: "red" }}>{error2}</p>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary  ">
            Register
          </button>
        </div>
        <div className="d-flex my-3">
          <p>
            Already have an account?
            <Link to="/login" className="fw-bold p-2 text-decoration-none name">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;