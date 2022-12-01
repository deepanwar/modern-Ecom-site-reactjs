import React from "react";

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

import markSimple from "../assets/svgs/mark-simple.svg";
import clothsImage from "../assets/images/cloths.jpg";
import InfiniteBanner from "../components/InfiniteBanner";

const category = ["Hoodies", "Sweatshirts", "Shirts", "T-Shirts", "Jackets"];
const company = ["About", "Blog", "Contact", "Guarantee", "Shipping"];
const support = ["Style Guide", "Licensing", "Change log", "Instructions"];

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] relative z-[2] py-[170px]">
    <InfiniteBanner/>
      {/* mean content */}
      <div className=" px-[14px] max-w-[1350px] mx-auto mt-[200px] relative z-[2]">
        <div className="relative z-2 w-full">
          <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] gap-x-16 ">
            <div className="relative">
              <h3 className="text-4xl text-white font-archivoExpandedLight">
                Find out about the sales at your local shop
              </h3>
              <button className="uppercase mt-12 border-2 border-white hover:border-[#BF8C4E] transition ease-in duration-400 hover:text-[#BF8C4E] rounded-md px-8 py-2 text-white font-archivoExpandedLight text-sm ">
                Finds Shops
              </button>
              <div className="absolute top-0 left-0 -translate-y-14">
                <HiOutlineLocationMarker size={24} className="text-[#BF8C4E]" />
              </div>
              <div className="absolute top-0 left-0 -translate-y-40 h-[64px] aspect-square border-2 border-white p-3 ">
                <img src={markSimple} alt="markSimple" className="mt-1" />
              </div>
            </div>
            <div>
              <h1 className="text-white font-archivoExpandedMedium uppercase mb-4 ">
                Categories
              </h1>
              <ul className="text-[#888888] font-archivoExpandedRegular space-y-2">
                {category.map((element, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {element}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-white font-archivoExpandedMedium uppercase mb-4">
                Company
              </h1>
              <ul className="text-[#888888] font-archivoExpandedRegular space-y-2">
                {company.map((element, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {element}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-white font-archivoExpandedMedium uppercase mb-4">
                Support
              </h1>
              <ul className="text-[#888888] font-archivoExpandedRegular space-y-2">
                {support.map((element, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {element}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-9 hover space-y-3">
              <FaFacebook
                size={24}
                className="hover:fill-white fill-[#888888]"
              />
              <FaTwitter
                size={24}
                className="hover:fill-white fill-[#888888]"
              />
              <FaYoutube
                size={24}
                className="hover:fill-white fill-[#888888]"
              />
              <FaInstagram
                size={24}
                className="hover:fill-white fill-[#888888]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* background image */}
      <div className="absolute  inset-0 w-[35%] opacity-20 bg-auto z-[1]">
        <img src={clothsImage} alt="clothsImage" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Footer;
