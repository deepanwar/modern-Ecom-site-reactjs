{collections.map((item, i) => (
          <div
            key={i}
            className="rounded-lg h-[800px] bg-cover bg-center relative grayscale"
            style={{
              backgroundImage: `url(${item.image})`,
              marginTop: `${(i + 1) % 2 === 0 ? "0px" : "20px"}`,
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 hover:opacity-0 transition-opacity ease-in-out duration-500 z-20 rounded-lg" />
            <div className="absolute bottom-10 left-60  origin-left -rotate-90 z-10 w-full">
              <h1 className=" text-white text-6xl font-archivoExpandedRegular text-left">
                {item.title}
              </h1>
            </div>
          </div>
        ))}


<!-- card code  -->


        import React from "react";
import Cloth01 from "../assets/images/cloth_img1.png";
import Cloth02 from "../assets/images/cloth_img2.png";

const products = [
  {
    title: "crew new tshirt",
    image: Cloth01,
  },
  {
    title: "crew new tshirt",
    image: Cloth02,
  },
];

const Card = () => {

    return (
      <>

      </>
    )
    }
  
  export default Card;