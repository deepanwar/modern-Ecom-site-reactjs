import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

import markSimple from "../assets/svgs/mark-simple.svg";
import clothsImage from "../assets/images/cloths.jpg";
import InfiniteBanner from "../components/InfiniteBanner";

const category = ["Hoodies", "Sweatshirts", "Shirts", "T-Shirts", "Jackets"];
const company = ["About", "Blog", "Contact", "Guarantee", "Shipping"];
const support = ["Style Guide", "Licensing", "Change log", "Instructions"];

const list = {
  visible: {
    opacity: 1,
    transition: {
      // delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -10 },
};

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] relative z-[2] md:py-[170px] py-[100px]">
      <InfiniteBanner />
      {/* mean content */}
      <div className=" px-[14px] max-w-[1350px] mx-auto mt-[200px] relative z-[2]">
        <motion.div
          className="relative z-2 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn({ direction: "up", duration: 0.5 })}
        >
          <div className="grid md:grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] grid-cols-2 gap-x-16 gap-y-10 ">
            <div className="relative col-span-2 md:col-span-1 pr-10">
              <h3 className="text-2xl sm:text-4xl text-white font-archivoExpandedLight">
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
              <motion.ul
                className="text-[#888888] font-archivoExpandedRegular space-y-2"
                initial="hidden"
                whileInView="visible"
                variants={list}
                viewport={{ once: true, amount: 0.25 }}
              >
                {category.map((element, i) => (
                  <motion.li
                    key={i}
                    className="hover:text-white cursor-pointer"
                    variants={item}
                  >
                    {element}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <h1 className="text-white font-archivoExpandedMedium uppercase mb-4">
                Company
              </h1>
              <motion.ul
                className="text-[#888888] font-archivoExpandedRegular space-y-2"
                initial="hidden"
                whileInView="visible"
                variants={list}
                viewport={{ once: true, amount: 0.25 }}
              >
                {company.map((element, i) => (
                  <motion.li
                    key={i}
                    className="hover:text-white cursor-pointer"
                    variants={item}
                  >
                    {element}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <h1 className="text-white font-archivoExpandedMedium uppercase mb-4">
                Support
              </h1>
              <motion.ul
                className="text-[#888888] font-archivoExpandedRegular space-y-2"
                initial="hidden"
                whileInView="visible"
                variants={list}
                viewport={{ once: true, amount: 0.25 }}
              >
                {support.map((element, i) => (
                  <motion.li
                    key={i}
                    className="hover:text-white cursor-pointer"
                    variants={item}
                  >
                    {element}
                  </motion.li>
                ))}
              </motion.ul>
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
        </motion.div>
      </div>

      {/* background image */}
      <div className="absolute  inset-0 md:w-[35%] w-full md:h-auto h-[400px]  opacity-20 bg-auto z-[1]">
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
        <img src={clothsImage} alt="clothsImage" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Footer;
