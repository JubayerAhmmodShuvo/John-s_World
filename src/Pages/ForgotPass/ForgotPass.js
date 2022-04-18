import React, { useState, useEffect } from "react";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loding/Loading';
import { ToastContainer, toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  useEffect(() => {
    if (sending && email) {
      toast("Sending...");
    }
  
  }, [sending, email]);
  useEffect(() => {
    if (error) {
      toast("Enter an Email address");
    }
   }, [error]);
  
  
   

  return (
    <div className="container text-center my-5 border rounded w-50 p-lg-5">
      <input
        className=" w-100 mt-5 p-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <br />
      <ToastContainer />
      <button
        className="btn btn-outline-primary my-4 mb-5 "
        onClick={async () => {
          await sendPasswordResetEmail(email);
          setEmail(" ");
        }}
      >
        Reset password
      </button>
    </div>
  );
};

export default ForgotPass;