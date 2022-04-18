import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../Firebase.init';
import github from "../../../src/images/11.png";
import google from "../../../src/images/12.png";
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error2, setError] = useState("");
  const navigate = useNavigate();
   const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

  
  if (loading) {
    return <p className="text-center" >Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }
  if (googleUser) {
    navigate("/home");
  }
  if (githubUser) {
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
  
/*   const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email sent");
      })
  } */
  
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
    <div className="container">
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
            <button
              
              type="submit"
              className="btn btn-primary  "
            >
              Sign Up
            </button>
          </div>
          <div className="d-flex my-3">
            <p>
              Already have an account?
              <Link
                to="/login"
                className="fw-bold fs-5 text-black p-2 text-decoration-none name"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="text-center">
        <button
          onClick={() => signInWithGoogle()}
          type="button"
          class="btn btn-outline-secondary w-25 my-4 "
        >
          <img className="w-25" src={google} alt="google" />
          Signup with Google
        </button>
      </div>
      <div className="text-center">
        <button
          onClick={() => signInWithGithub()}
          type="button"
          class="btn btn-outline-secondary w-25 mb-4 "
        >
          <img className="w-25 h-25" src={github} alt="google" />
          Signup with Github
        </button>
      </div>
    </div>
  );
};

export default Register;