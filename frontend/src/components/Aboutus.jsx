import React from "react";
import t1 from "../images/team-3-800x800.jpg";
import t2 from "../images/team-2-800x800.jpg";
const Aboutus = () => {
  return (
    <div>
      <section className='relative '>
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
      </section>

      <div className='bg-gray-300'>
        <section className='pt-20 pb-48' dir='rtl'>
          <div className='container mx-auto px-4' dir='rtl'>
            <div className='flex flex-wrap justify-center text-center mb-24'>
              <div className='w-full lg:w-6/12 px-4'>
                <h2 className='text-4xl font-semibold'>הצוות שלנו</h2>
                <p className='text-lg leading-relaxed m-4 text-gray-600'>
                  פה נרשום מה שצריך
                </p>
              </div>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={t2}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: "120px" }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Alexa Smith</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      UI/UX Designer
                    </p>
                    <div className='mt-6'>
                      <button
                        className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-google'></i>
                      </button>
                      <button
                        className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-twitter'></i>
                      </button>
                      <button
                        className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-instagram'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={t1}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: "120px" }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Jenna Kardi</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Founder and CEO
                    </p>
                    <div className='mt-6'>
                      <button
                        className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-dribbble'></i>
                      </button>
                      <button
                        className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-google'></i>
                      </button>
                      <button
                        className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-twitter'></i>
                      </button>
                      <button
                        className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-instagram'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
