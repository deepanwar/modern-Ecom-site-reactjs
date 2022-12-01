import React from "react";

import image01 from "../assets/images/image01.jpg";
import image02 from "../assets/images/image02.jpg";
import image03 from "../assets/images/image03.jpg";
import image04 from "../assets/images/image04.jpg";
import image05 from "../assets/images/image05.jpg";

const collections = [
  {
    title: "Hoodies",
    image: image01,
  },
  {
    title: "Sweatshirts",
    image: image05,
  },
  {
    title: "Shirts",
    image: image02,
  },
  {
    title: "T-Shirts",
    image: image03,
  },
  {
    title: "Jackets",
    image: image04,
  },
];

const Collections = () => {
  return (
    <div className="md:px-6 px-2 py-[70px] min-h-screen w-full">
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
