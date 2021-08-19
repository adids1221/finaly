import React from "react";

const Conatct = () => {
  return (
    <div className=' flex justify-center' dir='rtl'>
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
            </p> */}
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='phone'
            >
              מספר טלפון:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              type='text'
              placeholder='מספר טלפון'
            />
            {/* <p className='text-red-500 text-xs italic'>
              Please choose a password.
            </p> */}
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='message'
            >
              תוכן ההודעה:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              type='textarea'
              placeholder='תוכן ההודעה'
            />
            {/* <p className='text-red-500 text-xs italic'>
              Please choose a password.
            </p> */}
          </div>

          <div className='flex items-center justify-between'>
            <button class='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
              שלח
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Conatct;
