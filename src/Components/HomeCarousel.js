import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "./Header";
import { Call, DoneOutline, Favorite, TaskAlt } from "@mui/icons-material";

function HomeCarousel() {
  return (
    <div>
      {/* <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        swipeable={true}
        showThumbs={false}
        stopOnHover={false}
      > */}

      <div className="relative bg-black">
        <img
          src="/assets/4g.webp"
          alt="Your Image"
          className="w-full h-600 sm:h-340 opacity-60"
        />
        <div className="absolute top-1/3 mt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center justify-center align-middle rounded-md">
          <div className="sm:mt-1">
            <h1 className="text-5xl sm:text-lg font-extrabold text-center">
              Welcome to{" "}
              <span className="bg-transparent border-2 border-white text-orange-500 p-2 sm:p-1 rounded-sm">
                ID3 Interiors
              </span>
            </h1>
            <h2 className="text-center mt-10 text-3xl sm:text-lg font-bold">
              Get Your Dream Home Decorated with Love{" "}
              <Favorite className="text-[#ed1c1c]" />
            </h2>
            <div className="text-left sm:text-left mt-5">
              <p className="text-2xl sm:text-lg font-bold">
                <DoneOutline className=" text-[#32a852]" /> Client centric
                Design
              </p>
              <p className="text-2xl sm:text-lg font-bold">
                <DoneOutline className=" text-[#32a852]" /> Ready to Move in 90
                Days
              </p>
              <p className="text-2xl sm:text-lg font-bold">
                <DoneOutline className=" text-[#32a852]" /> Cost Engineering &
                Optimization
              </p>
              <p className="text-xl sm:text-base font-bold">
                <Call /> Book Your Call with Us Today !
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
          <img src="/assets/banner1.webp" alt="" className="relative w-100vw" />
        </div> */}
      {/* </Carousel> */}
    </div>
  );
}

export default HomeCarousel;
