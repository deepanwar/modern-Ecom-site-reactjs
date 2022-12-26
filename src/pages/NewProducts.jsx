import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Cloth01 from "../assets/images/cloth_img1.png";
import Cloth02 from "../assets/images/cloth_img2.png";
import arrowIcon from "../assets/svgs/arrow-icon.svg";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

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

const NewProducts = () => {
  return (
    <div className="max-w-[1350px] mx-auto md:px-7 px-4 py-12">
      <motion.div
        className="font-archivoExpandedBold"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* left */}
        <motion.div variants={fadeIn({ direction: "right", delay: 0.2 })}>
          <h1 className="lg:text-[100px] text-left text-4xl md:text-7xl">
            NEWEST
          </h1>
        </motion.div>

        {/* right */}
        <motion.div variants={fadeIn({ direction: "left", delay: 0.2 })}>
          <h1 className="lg:text-[100px] text-white text-right text-4xl md:text-7xl">
            PRODUCTS
          </h1>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-between items-start mb-[20px] text-base md:text-[18px] leading-1.4 tracking-[0.7px] mt-8 flex-col md:flex-row"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn({ direction: "up" })}
      >
        <p className="max-w-[600px] font-archivoExpandedMedium text-[#1a1a1a] mb-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta feugiat
          etiam aliquet aliquet tellus vel. Et maecenas id bibendum sit. Augue
          nulla tortor faucibus nunc. Urna massa mattis faucibus velit sed
          volutpat sodales. Quis at mi amet, ipsum.
        </p>
        <button className="text-sm font-archivoExpandedMedium uppercase flex items-center gap-2 cursor-pointer self-end">
          view all
          <img src={arrowIcon} alt="arrowIcon" />
        </button>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 my-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.02 }}
        variants={fadeIn({ direction: "up", delay: 0.05 })}
      >
        {products.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            primaryImage={item.image1}
            secondaryImage={item.image2}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default NewProducts;
