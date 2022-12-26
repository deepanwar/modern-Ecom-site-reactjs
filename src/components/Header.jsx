import React, { useEffect, useState } from "react";

import logo from "../assets/svgs/milano-logo-black.svg";
import cartIcon from "../assets/svgs/shop-icon.svg";
import searchIcon from "../assets/svgs/search-black.svg";

import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ headerOpen, handleNav }) => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "top-0" : "-top-[70px]";
  // console.log(headerOpen);
  return (
    <>
      <div className={`w-full  fixed ${cls} left-0 md:px-10 px-4 z-50`}>
        <div className="h-[70px] max-w-[1350px] mx-auto flex justify-between items-center">
          {/* left side */}

          <div className="flex justify-center items-center space-x-5">
            {/* logo */}
            <img src={logo} alt="logo" className="h-8" />

            {/* menu icon */}
            <div onClick={handleNav}>
              {headerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>
          </div>

          {/* right side */}
          <div className="flex justify-center items-center space-x-7 pr-3">
            {/* search icon */}
            <div className="text-black cursor-pointer">
              <img src={searchIcon} alt="" className="text-black" />
            </div>
            <div className="relative cursor-pointer">
              {/* cart icon */}
              <img src={cartIcon} alt="cartIcon" />
              <span className="absolute h-5 w-5 rounded-full bg-[#BF8C4E] -top-[10px] -right-[10px] flex justify-center items-center text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
