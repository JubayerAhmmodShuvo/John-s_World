import React from "react";
import Baner from "../../../src/images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="row my-lg-5">
      <div className="col-lg-6 mt-lg-5 col-sm-12 ">
        <h2 className="text-center my-4">
          To Care for your <span className="text-danger ">Tooth</span>
        </h2>
        <p className="m-4 " id="banner-description">
          The human teeth function to mechanically break down items of food by
          cutting and crushing them in preparation for swallowing and digesting.
          Humans have four types of teeth: incisors, canines, premolars, and
          molars, which each have a specific function. The incisors cut the
          food, the canines tear the food and the molars and premolars crush the
          food. The roots of teeth are embedded in the maxilla (upper jaw) or
          the mandible (lower jaw) and are covered by gums. Teeth are made of
          multiple tissues of varying density and hardness.
        </p>
      </div>
      <div className="col-lg-6 col-sm-12">
        <img className="mx-auto img-fluid mt-sm-4 mb-5 " src={Baner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
