import React from "react";
import ScrollToTop from "react-scroll-up";

const ScroolToTop = () => {
  return (
    <ScrollToTop
      showUnder={600}
      style={{
        position: "fixed",
        zIndex: 10,
        bottom: 50,
        right: 30,
        cursor: "pointer",
        transitionDuration: "0.5s",
        transitionTimingFunction: "easeInExpo",
        transitionDelay: "0s",
      }}
    >
      <div className=' text-white text-center p-3 inline-flex items-center justify-center w-9 h-9 mb-5 shadow-lg rounded-full bg-red-400'>
        <i
          class='hover:text-black transition ease-out duration-200 transform hover:-translate-y-1  hover:scale-125 fa fa-arrow-up'
          aria-hidden='true'
        ></i>
      </div>
    </ScrollToTop>
  );
};

export default ScroolToTop;
