import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="container b">
      <div className=" m-4  ">
        <div className="bg-secondary text-light rounded p-5 mb-4">
          <h2 className=" mb-4  ">
            Question 1: Difference between authorization and authentication?
          </h2>
          <p className=" mb-6 text-justify blogs  ">
            Authentication is a process of defining that user is correct owner
            of any account, which tries to identify the user before accessing
            the application. Challenges the user to validate credentials (for
            example, through passwords, answers to security questions, or facial
            recognition). Usually done before authorization and generally,
            transmits info through an ID Token. Authorization is the process of
            verifying what they have access to and if they do not have access,
            they will not be allowed to take that action. Verifies whether
            access is allowed through policies and rules, usually done after
            successful authentication and generally, it transmits info through
            an Access Token.
          </p>
        </div>
        <div className=" bg-secondary text-light rounded p-5 mb-4">
          <h2 className=" mb-4  ">
            Question 2: Why are you using firebase? What other options do you
            have to implement authentication?
          </h2>
          <p className=" text-justify blogs">
            Firebase auth has a built in email/password authentication system,
            it also supports OAuth2 for Google, Facebook, Twitter and Github.
            Firebase’s OAuth2 system is well-documented and very easy to
            implement, as a developer, if you’ve ever written an authentication
            system, you can agree with me that it is never an ordinary piece of
            cake, most especially for some of us who are still novice in the
            industry. At a glance, I fell in love with Firebase Auth, and the
            flame of it beauty has never departed and that's why I am using
            firebase. Other options are:
            <strong>
              Auth0, MongoDB, Okta, Passport, JSON Web Token, Amazon Cognito,
              Keycloak.
            </strong>
            etc...
          </p>
        </div>
        <div className=" bg-secondary text-light rounded p-5 mb-4">
          <h2 className="text-left  mb-4  ">
            Question 3: What other services does firebase provide other than
            authentication?
          </h2>
          <p className=" mb-6 text-justify blogs">
            Firebase is a full package that can help in developing your mobile
            or web applications faster with fewer resources and more efficiency.
            Now, let’s look at some of the services and use of it.
            <ul>
              <li> Hosting: Host applications for free. </li>
              <li>
                Cloud Storage: Cloud Storage is a powerful, simple, and
                cost-effective storage service.
              </li>
              <li>
                Google Analytics: The service provides visualization of all this
                information on just a single tap and helps growing business.
              </li>
              <li> Predictions: This is used for making predictions.</li>
              <li>
                Cloud Messaging: For notifications in the mobile application
                it's the best free way.
              </li>
              <li>
                Dynamic Links: This service was called google URL shortener in
                the past, but now it is renamed as Dynamic Links.
              </li>
              <li>
                Remote Config: It helps changing application UI and content
                remotely.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
