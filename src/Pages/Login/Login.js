import React, { useEffect } from "react";
import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import "./Login.css";
import { useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import github from "../../../src/images/11.png";
import google from "../../../src/images/12.png";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  if (googleUser) {
    navigate(from, { replace: true });
  }
  if (githubUser) {
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
      setErrors({ ...errors, password: "Please enter correct password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleUserLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      toast.error(hookError?.message);
    }
  }, [hookError]);

  return (
    <div className="container">
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
            {errors?.email && (
              <p className="alert alert-danger mt-3">{errors.email}</p>
            )}
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
            {errors?.password && (
              <p className="alert alert-danger mt-3">{errors?.password}</p>
            )}
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
                className="fw-bold fs-5 p-2 text-decoration-none text-black name"
              >
                Signup
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
          Login with Google
        </button>
      </div>
      <div className="text-center mb-5">
        <button
          onClick={() => signInWithGithub()}
          type="button"
          class="btn btn-outline-secondary w-25 mb-4 "
        >
          <img className="w-25" src={github} alt="google" />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
