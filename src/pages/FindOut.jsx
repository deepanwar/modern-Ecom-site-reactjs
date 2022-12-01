import React from "react";

import circleText from "../assets/svgs/sale-circle.svg";
import saleBadage from "../assets/svgs/sale-badage.svg";
import mark from "../assets/svgs/mark-simple.svg";

const FindOut = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="max-w-[1350px] mx-auto px-7 py-12 ">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7 py-[170px]">
          {/* left */}
          <div className="col-span-2 flex items-center justify-center ">
            <div className="h-[170px] aspect-square relative flex">
              <img
                src={circleText}
                alt="circleText"
                className="animate-spin-slow"
              />
              <img
                src={mark}
                alt="circleText"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 h-20 w-20 flex justify-center items-center">
                <div className="font-archivoExpandedSemiBold relative z-[3]">
                  <p className="uppercase text-xs text-white text-center">
                    up to
                  </p>
                  <p className="uppercase text-xl text-white text-center">
                    70%
                  </p>
                </div>
                <img
                  src={saleBadage}
                  alt="circleText"
                  className="absolute top-0 left-0"
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-4">
            <h1 className="text-white font-archivoExpandedRegular text-[64px] leading-tight">
              Find out about the sales at your local shop
            </h1>
            <button className="uppercase px-[41px] py-[22px] bg-white font-archivoExpandedSemiBold text-sm rounded-lg mt-10 text-[#1A1A1A] hover:bg-[#888888] transition-colors ease-in-out duration-500">
              Find shops near you
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindOut;
