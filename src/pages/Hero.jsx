import React from "react";
import hero from "../assets/images/hero-image.jpg";
import arrowIcon from "../assets/svgs/arrow-icon.svg";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full min-h-screen py-[100px] relative">
      {/* hero text */}
      <div className="py-14 px-8 font-archivoExpandedBold text-[100px] leading-[90px] z-20 relative max-w-[1350px] mx-auto space-y-3">
        <motion.h1
          initial={{ rotateX: "-90deg" }}
          animate={{ rotateX: "0deg" }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          // transform= {{}}
        >
          GET
        </motion.h1>
        <motion.h1
          initial={{ rotateX: "-90deg" }}
          animate={{ rotateX: "0deg" }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.1 }}
        >
          YOURSELF
        </motion.h1>
        <motion.h1
          initial={{ rotateX: "-90deg" }}
          animate={{ rotateX: "0deg" }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.2 }}
          className="text-white"
        >
          INTO THE
        </motion.h1>
        <motion.h1
          initial={{ rotateX: "-90deg" }}
          animate={{ rotateX: "0deg" }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.3 }}
          className="text-white"
        >
          RIGHT GEAR
        </motion.h1>
        <motion.div
          initial={{ rotateX: "-90deg" }}
          animate={{ rotateX: "0deg" }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.4 }}
          className="pt-[60px]"
        >
          <button className="text-sm font-archivoExpandedMedium uppercase flex items-center gap-2 cursor-pointer">
            view summer Collections
            <img src={arrowIcon} alt="arrowIcon" />
          </button>
        </motion.div>
      </div>

      {/* hero image */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "40%" }}
        transition={{ ease: "easeOut", duration: 1 }}
        className=" absolute top-0 right-0 h-[728px] w-2/5 bg-gray-300 bg-cover bg-right z-10"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-36 w-36 bg-[#BF8C4E66] rounded absolute -bottom-20 -left-20 backdrop-blur-lg" />
      </motion.div>
    </div>
  );
};

export default Hero;
