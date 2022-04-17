import React from 'react';

const Blogs = () => {
  return (
    <div className="lg:m-20 m-4  ">
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h2 className="text-left text-2xl font-semibold mb-4  ">
          Question 1: Difference between authorization and authentication?
        </h2>
        <p className="text-left text-lg mb-6 text-justify "></p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h2 className="text-left text-2xl font-semibold mb-4  ">
          Question 2: Why are you using firebase? What other options do you have
          to implement authentication? 
        </h2>
        <p className="text-left text-lg mb-6 text-justify"></p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h2 className="text-left text-2xl font-semibold mb-4  ">
          Question 3: What other services does firebase provide other than
          authentication?
        </h2>
        <p className="text-left text-lg mb-6 text-justify"></p>
      </div>
    </div>
  );
};

export default Blogs;