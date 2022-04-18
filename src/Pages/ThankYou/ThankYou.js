import React from "react";
import thank from "../../../src/images/thank.png";

const ThankYou = () => {
  return (
    <div className="container">
      <h1 className="name text-center mt-3  ">Thank You For Your concern</h1>
      <img className="img-fluid my-5 mx-auto w-100" src={thank} alt="" />
    </div>
  );
};

export default ThankYou;
