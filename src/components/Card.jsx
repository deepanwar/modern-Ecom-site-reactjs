import React from "react";
import cartIcon from "../assets/svgs/cart-icon.svg";

const Card = ({ title, primaryImage, secondaryImage }) => {
  return (
    <div className=" bg-white flex flex-col rounded-lg overflow-hidden shadow-lg ">
      <div className="relative z-10">
        <img
          src={secondaryImage}
          alt="image"
          className="hover:opacity-0 transition-opacity ease-in-out duration-300"
        />
        <img
          src={primaryImage}
          alt="image"
          className="absolute top-0 left-0 -z-10"
        />
      </div>
      <div className="p-3 flex justify-between">
        <div className="font-archivoExpandedSemiBold text-sm">
          <p className="capitalize ">{title}</p>
          <span className="text-gray-500">€59.50</span>
        </div>
        <div >
          <img src={cartIcon} alt="cart" className="hover:fill-[#BF8C4E]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
