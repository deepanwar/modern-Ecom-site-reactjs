import React from "react";
import Card from "../components/Card";
import Cloth01 from "../assets/images/cloth_img1.png";
import Cloth02 from "../assets/images/cloth_img2.png";
import arrowIcon from "../assets/svgs/arrow-icon.svg";

const products = [
  {
    title: "crew new tshirt",
    image1: Cloth01,
    image2: Cloth02,
  },
  {
    title: "crew new tshirt",
    image1: Cloth01,
    image2: Cloth02,
  },
  {
    title: "crew new tshirt",
    image1: Cloth01,
    image2: Cloth02,
  },
  {
    title: "crew new tshirt",
    image1: Cloth01,
    image2: Cloth02,
  },

];

const Trending = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-7 py-24">
      <div className="font-archivoExpandedBold">
        {/* left */}
        <div className="text-[100px] text-left flex justify-start items-center h-[100px] overflow-hidden">
          <h1>SEASONS'S</h1>
        </div>

        {/* right */}
        <div className="text-[100px] text-white text-right flex justify-end items-center h-[100px] overflow-hidden">
          <h1> TRENDING </h1>
        </div>
      </div>
      <div className="flex justify-between items-start mb-[20px] text-[18px] leading-1.4 tracking-[0.7px] mt-8">
        <p className="max-w-[600px] font-archivoExpandedMedium text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta feugiat
          etiam aliquet aliquet tellus vel. Et maecenas id bibendum sit. Augue
          nulla tortor faucibus nunc. Urna massa mattis faucibus velit sed
          volutpat sodales. Quis at mi amet, ipsum.
        </p>
        <button className="text-sm font-archivoExpandedMedium uppercase flex items-center gap-2 cursor-pointer">
          view all
          <img src={arrowIcon} alt="arrowIcon" />
        </button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 my-14">
        {products.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            primaryImage={item.image1}
            secondaryImage={item.image2}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;