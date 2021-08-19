import React from "react";
import Facebook from "../images/Facebook.png";
import LinkedIn from "../images/Linkedin.png";
import Twitter from "../images/Twitter.png";

const SocialIcons = () => {
  return (
    <div class='flex items-center justify-center min-h-screen'>
      <a href='https://www.linkedin.com/in/sapir-mashiach-606305142/'>
        <img
          className='h-full py-1 pr-2 ml-1 transform hover:scale-110'
          src={Facebook}
          alt='Display'
        />
      </a>
      <a href='https://www.linkedin.com/in/sapir-mashiach-606305142/'>
        <img
          className=' h-full py-1 pr-2 ml-1 transform hover:scale-110'
          src={LinkedIn}
          alt='Display'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/sapir-mashiach-606305142/'
        className=' motion-safe:hover:scale-110'
      >
        <img
          className=' h-full py-1 pr-2 ml-1 transform hover:scale-110'
          src={Twitter}
          alt='Display'
        />
      </a>
    </div>
  );
};
export default SocialIcons;
