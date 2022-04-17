import React, { useEffect } from "react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import './Login.css';
import { useLocation } from "react-router"; 
  import { ToastContainer, toast } from "react-toastify";

  import "react-toastify/dist/ReactToastify.css";

const Login = () => {
 const [userInfo, setUserInfo] = useState({
   email: "",
   password: "",
 });
 const [errors, setErrors] = useState({
   email: "",
   password: "",
   
 });

   const [signInWithEmailAndPassword, user, loading, hookError] =
     useSignInWithEmailAndPassword(auth);
   const navigate = useNavigate();
   const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  

   if (user) {
     navigate(from, { replace: true });
  }
  
  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    
  };
  const handlePasswordBlur = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password is wrong" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
   const handleUserLogin = (event) => {
     event.preventDefault();

     signInWithEmailAndPassword(userInfo.email, userInfo.password);
   };

  useEffect(() => { 
    if(hookError) {
      toast.error(hookError?.message);
    }
  }, [hookError]);


  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <form
        onSubmit={handleUserLogin}
        className="w-50 border rounded-3 p-lg-5 p-2"
      >
        <h1 className="text-center mt-3 mb-4 name">Login</h1>
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
          {errors?.email && 
            <p className="alert alert-danger mt-3">{errors.email}</p>
          }
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
          {errors?.password && 
            <p className="alert alert-danger mt-3">{errors.password}</p>
          }
        </div>

        <ToastContainer />

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary  ">
            Login
          </button>
        </div>
        <div className="d-flex my-3">
          <p>
            Don't have an account?
            <Link
              to="/register"
              className="fw-bold p-2 text-decoration-none name"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
