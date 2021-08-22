import React from "react";

const values = [
  {
    name: "ניהול תיק השקעות",
    alt: "v1",
    icon: (
      <i class='hover:text-black transition ease-out duration-200 transform hover:-translate-y-1 fas fa-tasks'></i>
    ),
  },
  {
    name: "השקעות בנדלן",
    alt: "v2",
    icon: <i class='hover:transition ease-out duration-200 fas fa-sign'></i>,
  },
  {
    name: "מסחר עצמאי בבורסה",
    alt: "v3",
    icon: <i class='hover:transition ease-out duration-200 fas fa-chess'></i>,
  },
  {
    name: "קרנות נאמנות",
    alt: "v4",
    icon: (
      <i class='hover:transition ease-out duration-200 fab fa-accusoft'></i>
    ),
  },
];

const Values = () => {
  return (
    <div className='bg-gray-300 pb-10 mt-5'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='lg:pt-12 pt-6 w-full px-4 text-center '>
            <h1 className='text-3xl mb-2 font-semibold leading-normal text-center justify-centerpb-3 -mt-10'>
              הערכים שלנו
            </h1>
            <div className='relative flex flex-row min-w-0 break-words bg-white bg-opacity-60 w-full mb-8 shadow-lg rounded-lg'>
              {values.map((val) => (
                <div className='px-4 py-5 flex-auto '>
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

/* 
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree,
  },
]

export default function Example() {
  return (
    <div className="w-full max-w-sm px-4 fixed top-16">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Solutions</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
*/
