import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const values = [
  {
    name: "ניהול תיק השקעות",
    alt: "v1",
    icon: (
      <i className='hover:text-black transition ease-out duration-200 transform hover:-translate-y-1 fas fa-tasks'></i>
    ),
  },
  {
    name: "השקעות בנדלן",
    alt: "v2",
    icon: (
      <i className='hover:text-black transition ease-out duration-200 transform hover:-translate-y-1 fas fa-sign'></i>
    ),
  },
  {
    name: "מסחר עצמאי בבורסה",
    alt: "v3",
    icon: (
      <i className='hover:text-black transition ease-out duration-200 transform hover:-translate-y-1 fas fa-chess'></i>
    ),
  },
  {
    name: "קרנות נאמנות",
    alt: "v4",
    icon: (
      <i className='hover:text-black transition ease-out duration-200 transform hover:-translate-y-1 fab fa-accusoft'></i>
    ),
  },
];

const Values = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos='fade-up-right' className='bg-gray-300 pb-10 mt-5'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='lg:pt-12 pt-6 w-full px-4 text-center '>
            <h1 className='text-3xl mb-2 font-semibold leading-normal text-center justify-centerpb-3 -mt-10'>
              הערכים שלנו
            </h1>
            <div className='relative flex flex-row min-w-0 break-words bg-white bg-opacity-60 w-full mb-8 shadow-lg rounded-lg'>
              {values.map((val) => (
                <div key={val.name} className='px-4 py-5 flex-auto '>
                  <div className='text-white text-center p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                    {val.icon}
                  </div>
                  <h6 className='text-l sm:text-xl font-medium sm:font-semibold hover:transition ease-out duration-200'>
                    {val.name}
                  </h6>
                  <p className='mt-2 mb-4 text-gray-600'>
                    lorem ipsum dolor sit am
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
