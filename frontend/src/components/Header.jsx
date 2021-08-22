import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import logo from "../images/logo.png";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  {
    name: "מי אנחנו",
    href: "#",
    icon: <i class='far fa-user leading-lg pl-1'></i>,
    to: "/aboutus",
  },
  {
    name: "הפתרונות שלנו",
    href: "#",
    icon: <i className='far fa-lightbulb leading-lg pl-1'></i>,
    to: "/solutions",
  },
  {
    name: "צור קשר",
    href: "#",
    icon: <i className='far fa-envelope leading-lg pl-1'></i>,
    to: "/contact",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure as='nav' className={"bg-white bg-opacity-75 top-0"} dir='rtl'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='object-none object-right inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img className='block  h-8 w-auto' src={logo} alt='Logo' />
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    {navigation.map((item) => (
                      <NavLink
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-500 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <SocialIcons />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    // <div as='nav' className='bg-gray-100' dir='rtl'>
    //   <nav className='top-0 absolute z-50 w-full flex felx-wrap items-center justify-between px-2 py-3'>
    //     <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
    //       <div>
    //         {navigation.map((item) => (
    //           <a
    //             key={item.name}
    //             href={item.href}
    //             className={classNames(
    //               "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowarp text-black"
    //             )}
    //           >
    //             {item.icon}
    //             {item.name}
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //     <div className='object-left'>
    //       <SocialIcons />
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Header;
