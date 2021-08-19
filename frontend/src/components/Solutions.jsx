import React from "react";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";

const solutions = [
  { name: "ניהול תיק השקעות", alt: "s1", img: s1 },
  { name: "קרות השקעה אלטרנטיביות", alt: "s2", img: s2 },
  { name: "מסחר עצמאי בבורסה", alt: "s3", img: s3 },
  { name: "קרנות נאמנות", alt: "s4", img: s4 },
];

const Solutions = () => {
  return (
    <div className='p-8'>
      {solutions.map((sol) => (
        <div className='py-4'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover md:w-48'
                  src={sol.img}
                  alt={sol.alt}
                />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Case study
                </div>
                <a
                  href='#'
                  className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
                >
                  Finding customers for your new business
                </a>
                <p className='mt-2 text-gray-500'>
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solutions;

/* */
