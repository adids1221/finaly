import React from "react";
const SocialIcons = () => {
  return (
    <div class='flex items-center justify-center pl-20 '>
      <div className='hidden md:block '>
        <ul class='flex flex-row  list-none lg:ml-auto '>
          <li className='flex items-center'>
            <a
              className='text-black hover:text-gray-300 py-4 px-3 lg:py-2 flex items-center text-xs uppercase font-bold'
              href='https://www.linkedin.com/in/sapir-mashiach-606305142/'
              target='_blank'
            >
              <i className='text-gray-500 hover:text-black transition ease-out duration-200 fab fa-facebook text-4xl leading-lg  transform hover:-translate-y-1' />
            </a>
          </li>
          <li className='flex items-center'>
            <a
              className='text-black hover:text-gray-300 py-4 px-3 lg:py-2 flex items-center text-xs uppercase font-bold'
              href='https://www.linkedin.com/in/sapir-mashiach-606305142/'
              target='_blank'
            >
              <i className='text-gray-500 hover:text-black  transition ease-out duration-200 fab fa-twitter text-4xl leading-lg transform hover:-translate-y-1' />
            </a>
          </li>
          <li className='flex items-center'>
            <a
              className='text-black hover:text-gray-300 py-4 px-3 lg:py-2 flex items-center text-xs uppercase font-bold'
              href='https://www.linkedin.com/in/sapir-mashiach-606305142/'
              target='_blank'
            >
              <i className='text-gray-500 hover:text-black transition ease-out duration-200 fab fa-linkedin-in text-4xl leading-lg transform hover:-translate-y-1' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SocialIcons;

/*
<div class='flex items-center justify-center pl-20'>
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
    </div> */
