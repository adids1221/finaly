import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";

const solutions = [
  {
    name: "ניהול תיק השקעות",
    alt: "s1",
    img: s1,
    description: "מה שנרצה לכתוב",
  },
  {
    name: "קרות השקעה אלטרנטיביות",
    alt: "s2",
    img: s2,
    description: "מה שנרצה לכתוב",
  },
  {
    name: "מסחר עצמאי בבורסה",
    alt: "s3",
    img: s3,
    description: "מה שנרצה לכתוב",
  },
  { name: "קרנות נאמנות", alt: "s4", img: s4, description: "מה שנרצה לכתוב" },
];

const Solutions = () => {
  useEffect(() => {
    Aos.init({ duration: 3000, offset: 110 });
  }, []);

  return (
    <div className='relative py-20 bg-white'>
      <div
        className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
        style={{ height: "80px" }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-white fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
      <h1
        id='solutions'
        data-aos='ease-in'
        className='text-3xl mb-2 font-semibold leading-normal text-center justify-centerpb-3 -mt-10 pb-10'
      >
        הפתרונות שלנו
      </h1>
      {solutions.map((sol) => (
        <div
          data-aos='fade-up'
          key={sol.name}
          className='container mx-auto px-4 py-4'
        >
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
              <img
                alt='...'
                className='max-w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform'
                src={sol.img}
              />
            </div>
            <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
              <div className='md:pr-12'>
                <h3 className='text-3xl font-semibold' dir='rtl'>
                  {sol.name}
                </h3>
                <p
                  className='mt-4 text-lg leading-relaxed text-gray-600'
                  dir='rtl'
                >
                  {sol.description}
                </p>
                {/* <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                          <i className='fas fa-fingerprint'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-gray-600'>
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                          <i className='fab fa-html5'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-gray-600'>Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                          <i className='far fa-paper-plane'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-gray-600'>Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solutions;

/* 

<div className='bg-primary p-8 lg:pb-24'>
      {solutions.map((sol) => (
        <div className='py-4 pt-16'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover md:w-48 transform hover:scale-105 transition-transform'
                  src={sol.img}
                  alt={sol.alt}
                />
              </div>
              <div className='p-8'>
                <div
                  className='tracking-wide text-sm text-indigo-500 font-semibold '
                  dir='rtl'
                >
                  {sol.name}
                </div>
                <a
                  href='#'
                  className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
                >
                  Finding customers for your new business
                </a>
                <p className='mt-2 text-gray-500 hover:font-semibold'>
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
*/
