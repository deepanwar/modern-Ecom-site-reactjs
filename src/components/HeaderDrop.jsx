import React, { useEffect, useState } from "react";

import image01 from "../assets/images/image01.jpg";
import image02 from "../assets/images/image02.jpg";
import image03 from "../assets/images/image03.jpg";
import image04 from "../assets/images/image04.jpg";
import image05 from "../assets/images/image05.jpg";
import default_image from "../assets/images/default-image.jpg";

const listItem = ["Hoddies", "Sweatshirts", "Shirts", "T-Shirts", "Jacket"];
const sideImage = [image01, image02, image05, image04, image03, default_image];

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
    <div
      className={`bg-[#E4E1DE] absolute inset-0 ${cls} z-30 transition-opacity duration-700 ease-in-out`}
    >
      <div className="max-w-[1350px] mx-auto pt-[126px] px-[28px] flex ">
        <ul className="w-1/2 space-y-8 font-archivoExpandedSemiBold relative">
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
        <div
          className="absolute bg-gray-500 inset-0 left-[50%] grayscale bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url(${sideImage[activeImage]})` }}
        />
      </div>
    </div>
  );
};

const ListItem = ({ index, item, setActiveImage }) => (
  <li
    className="text-lg  cursor-pointer hover:text-[#BF8C4E] "
    onMouseEnter={() => setActiveImage(index)}
    onMouseLeave={() => setActiveImage(5)}
  >
    0{index + 1}.
    <span className="font-archivoExpandedRegular text-6xl">{item}</span>
  </li>
);

export default HeaderDrop;
