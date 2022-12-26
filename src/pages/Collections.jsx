import React from "react";

import hoddieImg from "../assets/images/hoddieImg.jpg";
import sweatShirtImg from "../assets/images/sweatShirtImg.jpg";
import shirtImg from "../assets/images/shirtImg.jpg";
import tShirtImg from "../assets/images/tShirtImg.jpg";
import jacketImg from "../assets/images/jacketImg.jpg";

const collections = [
  {
    title: "Hoodies",
    image: hoddieImg,
  },
  {
    title: "Sweatshirts",
    image: sweatShirtImg,
  },
  {
    title: "Shirts",
    image: shirtImg,
  },
  {
    title: "T-Shirts",
    image: tShirtImg,
  },
  {
    title: "Jackets",
    image: jacketImg,
  },
];

const Collections = () => {
  return (
    <div className="md:px-6 px-4 py-[70px] min-h-screen w-full">
      <div className="py-10 grid md:grid-cols-5 gap-2 grid-cols-1  ">
        {/* {collections.map((item)=>(<h1>mohan</h1>))} */}
        {collections.map((item, i) => (
          <div
            key={i}
            className={`rounded md:h-[800px] h-[150px] bg-cover bg-center relative grayscale group hover:grayscale-0 transition-all ease-in-out duration-500
             overflow-hidden
            ${(i + 1) % 2 == 0 ? "md:mt-5" : null}`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* overlay start*/}
            <div className="absolute inset-0  z-[4] bg-black/50 group-hover:opacity-0 transition-opacity ease-in-out duration-500" />
            {/* overlay end */}
            <div className="absolute inset-0 flex place-content-end z-[2]">
              {/* text for larger screens */}
              <div className=" absolute top-auto md:flex hidden left-auto right-0 bottom-10 rotate-180 ">
                <h1
                  className="text-white text-[64px] font-archivoExpandedRegular"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {item.title}
                </h1>
              </div>
              {/* text for smaller screens */}
              <div className=" absolute top-auto flex md:hidden left-3 right-auto -bottom-0 ">
                <h1 className="text-white/30 text-[35px] font-archivoExpandedRegular ">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
