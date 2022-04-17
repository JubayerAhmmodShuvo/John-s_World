import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { Link } from 'react-router-dom';
;

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link id="navbar" className="navbar-brand ms-lg-4 " to="/ ">
            Dr. John Carter
          </Link>
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
                <Link className="nav-link active" aria-current="page" to=" ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to=" ">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to=" ">
                  Pricing
                </Link>
              </li>
              <li className="nav-item  ">
                {user ? 
                  <button className="btn btn-danger text-light p-2 rounded" onClick={handleSignOut}>SignOut</button>
                 : 
                  <Link className="nav-link btn-primary text-light px-3 rounded" to="/login">
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