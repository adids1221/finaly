import React from "react";

const Conatct = () => {
  return (
    <div className='relative pt-8 pb-6'>
      <section className='pb-20 relative block bg-white'>
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

        <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
          <div className='flex flex-wrap text-center justify-center'>
            <div className='w-full lg:w-6/12 px-4'>
              <h2 className='text-4xl font-semibold text-black'>
                הדרך שלך להצלחה
              </h2>
              <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-700'>
                lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className='flex flex-wrap mt-12 justify-center'>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-gray-200 inline-flex items-center justify-center'>
                <i className='fas fa-medal text-xl'></i>
              </div>
              <h6 className='text-xl mt-5 font-semibold text-black'>
                שירות מעולה
              </h6>
              <p className='mt-2 mb-4 text-gray-700'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-gray-200 inline-flex items-center justify-center'>
                <i className='fas fa-poll text-xl'></i>
              </div>
              <h5 className='text-xl mt-5 font-semibold text-black'>
                הגדלת הרווחים שלך
              </h5>
              <p className='mt-2 mb-4 text-gray-700'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-gray-200 inline-flex items-center justify-center'>
                <i className='fas fa-lightbulb text-xl'></i>
              </div>
              <h5 className='text-xl mt-5 font-semibold text-black'>
                הפתרונות שלנו
              </h5>
              <p className='mt-2 mb-4 text-gray-700'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative block py-24 lg:pt-0 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
                <div className='flex-auto p-5 lg:p-10' dir='rtl'>
                  <h4 className='text-2xl font-semibold'>צור איתנו קשר</h4>
                  <p className='leading-relaxed mt-1 mb-4 text-gray-600'>
                    נחזור אלייך עד 2 ימי עסקים
                  </p>
                  <div className='relative w-full mb-3 mt-8'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='full-name'
                    >
                      שם מלא
                    </label>
                    <input
                      type='text'
                      className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='שם מלא'
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='כתובת מייל'
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='message'
                    >
                      הודעה
                    </label>
                    <textarea
                      rows='4'
                      cols='80'
                      className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='רשום הודעה...'
                    />
                  </div>
                  <div className='text-center mt-6'>
                    <button
                      className='bg-primary bg-opacity-40 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                      style={{ transition: "all .15s ease" }}
                    >
                      שלח
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conatct;

{
  /* <div className='relative pt-8 pb-6'>
      <div className=' flex justify-center p-16 lg:pb-24' dir='rtl'>
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
              className='text-blue-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='w-full max-w-2xl '>
          <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                for='name'
              >
                שם:
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='שם מלא'
              />
            </div>

            <div className='mb-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                for='email'
              >
                כתובת מייל:
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='abc@example.com'
              />
              {/* <p className='text-red-500 text-xs italic'>
              Please choose a password.
            </p> */
}
//         </div>

//         <div className='mb-4'>
//           <label
//             className='block text-gray-700 text-sm font-bold mb-2'
//             for='phone'
//           >
//             מספר טלפון:
//           </label>
//           <input
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
//             id='phone'
//             type='text'
//             placeholder='מספר טלפון'
//           />
//           {/* <p className='text-red-500 text-xs italic'>
//           Please choose a password.
//         </p> */}
//         </div>

//         <div className='mb-4'>
//           <label
//             className='block text-gray-700 text-sm font-bold mb-2'
//             for='message'
//           >
//             תוכן ההודעה:
//           </label>
//           <input
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
//             id='message'
//             type='textarea'
//             placeholder='תוכן ההודעה'
//           />
//           {/* <p className='text-red-500 text-xs italic'>
//           Please choose a password.
//         </p> */}
//         </div>

//         <div className='flex items-center justify-between'>
//           <button class='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
//             שלח
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div> */}
