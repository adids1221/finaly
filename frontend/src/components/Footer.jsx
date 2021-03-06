import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className='relative bg-gray-300 pt-8 pb-6'>
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
            className='text-gray-300 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
      <div className='container mx-auto px-4' data-aos='fade'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-3xl font-semibold sm:pr-96' dir='rtl'>
              שמור על קשר!
            </h4>
            <h5 className='text-lg mt-0 mb-2 text-gray-700 sm:pr-96' dir='rtl'>
              צור קשר ונחזור אלייך תוך 2 ימי עסקים
            </h5>
            <div className='mt-6 pl-36'>
              <button
                className='bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                type='button'
              >
                <i className='flex fab fa-twitter'></i>
              </button>
              <button
                className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                type='button'
              >
                <i className='flex fab fa-facebook-square'></i>
              </button>
              <button
                className='bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                type='button'
              >
                <i className='flex fab fa-linkedin'></i>
              </button>
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-4' dir='rtl'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 px-4 ml-auto py-1 sm:py-5'>
                <span className='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                  קצת עלינו
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='/'
                    >
                      מי אנחנו
                    </a>
                  </li>

                  <li>
                    <a
                      className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://www.creative-tim.com/bootstrap-themes/free'
                    >
                      המוצרים שלנו
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4 py-1 sm:py-5'>
                <span className='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                  עוד דברים
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md'
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/terms'
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/privacy'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/contact-us'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
