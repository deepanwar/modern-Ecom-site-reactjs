import React from "react";

import markSimple from "../assets/svgs/m-mark-black.svg";

const InfiniteBanner = () => {
  return (
    <div className="absolute inset-0 !bottom-auto z-[10] bg-white rotate-1 overflow-hidden">
      <div className="flex space-x-4">
        <div className="flex space-x-4 animate-infinite-slide">
          <SlideCard />
          <SlideCard />
          <SlideCard />
          <SlideCard />
          <SlideCard />
          <SlideCard />
        </div>
        <div className="flex space-x-4 animate-infinite-slide delay-[20s]">
          <SlideCard />
          <SlideCard />
          <SlideCard />
          <SlideCard />
          <SlideCard />
          <SlideCard />
        </div>
      </div>
    </div>
  );
};

export default InfiniteBanner;

const SlideCard = ({ red }) => (
  <div
    className={`flex place-items-center space-x-4 ${red ? "bg-red-400" : null}`}
  >
    <div className="h-12 aspect-square p-2 border-2 border-[#1a1a1a]">
      <img src={markSimple} alt="markSimple" className="h-full w-full" />
    </div>
    <div className="h-2 aspect-square rounded-full bg-[#1a1a1a]" />
    <div>
      <h4 className="text-[3vw] font-archivoExpandedMedium text-[#1a1a1a]">
        MILANO
      </h4>
    </div>
  </div>
);
