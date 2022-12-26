import React, { useEffect, useState } from "react";

import hoddieImg from "../assets/images/hoddieImg.jpg";
import sweatShirtImg from "../assets/images/sweatShirtImg.jpg";
import shirtImg from "../assets/images/shirtImg.jpg";
import tShirtImg from "../assets/images/tShirtImg.jpg";
import jacketImg from "../assets/images/jacketImg.jpg";
import default_image from "../assets/images/default-image.jpg";

import { motion } from "framer-motion";

const listItem = ["Hoddies", "Sweatshirts", "Shirts", "T-Shirts", "Jacket"];
const sideImage = [
  hoddieImg,
  sweatShirtImg,
  shirtImg,
  tShirtImg,
  jacketImg,
  default_image,
];

const HeaderDrop = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeImage, setActiveImage] = useState(5);

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
  

  const cls = visible ? "opacity-100" : "opacity-0";
  return (
    <motion.div
      initial={{ height: "0%" }}
      animate={{ height: "100%" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={`bg-[#E4E1DE] absolute inset-0 ${cls} z-30 transition-opacity duration-700 ease-in-out pt-[70px] md:p-0`}
    >
      <div
        className="absolute bg-gray-500 inset-0 left-[50%] grayscale bg-cover bg-center transition-all duration-500 ease-in-out hidden md:block"
        style={{ backgroundImage: `url(${sideImage[activeImage]})` }}
      />
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: "200px" }}
        // transition={{ duration: 0.8 }}
        className="bg-gray-500 w-full h-[200px] grayscale bg-cover bg-center transition-all duration-500 ease-in-out block md:hidden"
        style={{ backgroundImage: `url(${sideImage[activeImage]})` }}
      />
      <motion.div
        initial={{ height: "0%" ,opacity:0}}
        animate={{ height: "100%" ,opacity:1}}
        transition={{ duration: 1 }}
        className="max-w-[1350px] mx-auto md:pt-[126px] pt-[50px] px-[28px] flex "
      >
        <ul className="md:w-1/2 md:space-y-8 space-y-4 font-archivoExpandedSemiBold relative mx-auto md:m-0">
          {listItem.map((item, index) => (
            <ListItem
              key={"list" + index}
              index={index}
              item={item}
              setActiveImage={setActiveImage}
            />
          ))}
        </ul>
        <div className="border-t-2 border-black"></div>
      </motion.div>
    </motion.div>
  );
};

const ListItem = ({ index, item, setActiveImage }) => (
  <li
    className="text-lg  cursor-pointer hover:text-[#BF8C4E] "
    onMouseEnter={() => setActiveImage(index)}
    onMouseLeave={() => setActiveImage(5)}
  >
    0{index + 1}.
    <span className="font-archivoExpandedRegular md:text-6xl text-3xl">
      {item}
    </span>
  </li>
);

export default HeaderDrop;
