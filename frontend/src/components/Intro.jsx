import React from "react";
import Backgroundimg from "../images/1.png";
const Intro = () => {
  return (
    <div className='flex space-x-4 '>
      <div className='flex-1 ...'>
        <img className='h-screen w-3/4' src={Backgroundimg} alt='Display' />
      </div>
    </div>
  );
};

export default Intro;
