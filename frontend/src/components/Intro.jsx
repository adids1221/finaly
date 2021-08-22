import React from "react";
import Backgroundimg from "../images/1.png";
import Vid from "../images/pexels-kampus-production-8348902.mp4";
const Intro = () => {
  return (
    <div
      className='relative pt-16 pb-32 flex content-center items-center justify-center'
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1510&q=80')",
        }}
      >
        <span
          id='blackOverlay'
          className='w-full h-full absolute opacity-50 bg-black'
        ></span>
      </div>
      <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
            <div className='pr-12'>
              <h1 className='text-white font-semibold text-5xl'>Finaly</h1>
              <p className='mt-4 text-lg text-gray-300'>Planing your wealth</p>
              <p className='mt-4 text-lg text-gray-300'>
                הסיפור שלך בדרך להצלחה
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
        style={{ height: "70px" }}
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
    </div>
  );
};

export default Intro;

/* <div className='flex-1 ...'>
        <img className='h-screen w-3/4' src={Backgroundimg} alt='Display' />
      </div> */

// <div
//   className='relative lg:pb-16 flex content-center items-center justify-center min-h-full'
//   id='intro'
// >
//   <div className='static h-screen w-full'>
//     {/* <video
//       loop
//       //src='https://www.apple.com/105/media/us/macbook-air/2020/e3fd8da8-1d68-4e62-886e-7982672a0499/anim/chip/large.mp4'
//       src={Vid}
//       autoplay='true'
//       muted
//       className='top-0 bg-center w-full h-full object-fill'
//     ></video> */}
//     <img
//       src={Backgroundimg}
//       alt='backimg'
//       className='w-3/4 h-full hidden lg:block'
//     />
//   </div>
//   <div className='container absolute mx-auto '>
//     <div className='items-center flex flex-wrap'>
//       <div className='w-full lg:w-3/4 px-4 ml-auto mr-2 text-right'>
//         <h3 className='text-white font-semibold text-3xl -mt-36'>
//           Planing your wealth
//         </h3>
//         <h1 className='text-white font-semibold text-7xl -mt-32'>Finaly</h1>
//       </div>
//     </div>
//   </div>
// </div>
