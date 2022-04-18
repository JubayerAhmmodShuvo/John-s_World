import React from "react";
import Pic from "../../../src/images/dfe.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12 mx-auto w-50 ">
          <img className="w-75 h-75  my-5 rounded " src={Pic} alt="" />
        </div>
        <div class="col-lg-4 mt-5 col-sm-12   ">
          <h1 className="my-5  text-center text-primary">About Me</h1>
          <p id="about">
            I am a web developer and problem solver who can develop web
            applications. I am good at learn things faster and love to face new
            challenges. Because I believe that without facing new challenges no
            one can learn how to overcome difficulties and improve themselves. I
            have that dedication to give my best effort to overcome any kind of
            difficulties and solve problems. Teamwork is mypersonal strength
            where my innovative ideas can be shared and from where I can gather
            knowledge for my own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
