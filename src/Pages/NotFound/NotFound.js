import React from 'react';
import Error from '../../../src/images/notfound.jpg';

const NotFound = () => {
  return (
    <div>
      <img className="h-screen w-full " src={Error} alt="" />
    </div>
  );
};

export default NotFound;