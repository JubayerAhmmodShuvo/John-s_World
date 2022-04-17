import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../Firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-info fs-4 ms-lg-4" href=" ">
            Dr. John Carder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav ms-auto me-3 gap-lg-5  ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                {user ?
              <button onClick={handleSignOut} >SignOut</button>
              :
              <Link  to="/login">
              Login
              </Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;