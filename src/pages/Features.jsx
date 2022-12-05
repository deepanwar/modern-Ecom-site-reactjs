import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../utils/motion";

import heroImage from "../assets/images/hero-crop.jpg";

const Features = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-7 py-12 ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn({ direction: "up" })}
      >
        <h1 className="text-[64px] font-archivoExpandedMedium">
          Features of our products
        </h1>
        <div className="py-12 h-[95vh] flex">
          {/* left */}
          <div className="p-10 bg-[#1a1a1a] w-1/2 h-full flex justify-between items-center flex-col">
            <h3 className="text-[36px] text-white font-archivoExpandedRegular mt-5 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="font-archivoExpandedRegular text-[#888888] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor netus mauris velit vulputate lectus aliquam. Faucibus
              posuere at euismod turpis feugiat porta vestibulum.
            </p>
          </div>
          {/* right */}
          <div
            className="w-1/2 h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            {/* <img src={heroImage} alt="" className="h-full w-full " /> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
