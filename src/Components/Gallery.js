import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 3,
  1200: 3,
  1000: 3,
  500: 1,
};

function Gallery() {
  return (
    <div className="w-full sm:w-100vw bg-[#fff7eb] my-10 text-center sm:ml-0">
      <div>
        <h1 className="text-4xl sm:text-2xl font-bold pt-4">
          <span className="text-blue-900">Some Captivating </span>Interior
          Designs
        </h1>
        <p className="text-center mt-6 text-lg sm:text-base sm:text-left sm:mx-6">
          Unlock the artistic potential of your dream home with our skilled
          interior designers! <br /> We create functional and aesthetic
          interiors that morphs with your mind, in turn giving a wholesome
          experience to you and your loved ones.
        </p>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-2 sm:flex-col sm:gap-0"
        >
          <img
            src="/assets/1g.webp"
            alt="1g"
            className="m-2 sm:m-1 object-contain p-4 sm:p-3"
          />
          <img
            src="/assets/2g.webp"
            alt="2g"
            className="m-2 sm:m-1 object-contain p-4 sm:p-3"
          />
          <img
            src="/assets/3g.webp"
            alt="3g"
            className="m-2 sm:m-1 object-contain p-4 sm:p-3"
          />
          <img
            src="/assets/4g.webp"
            alt="4g"
            className="m-2 sm:m-1 object-contain p-4 sm:p-3"
          />
          <img
            src="/assets/5g.webp"
            alt="5g"
            className="m-5 sm:m-1 sm:object-contain sm:p-3"
          />
        </Masonry>
      </div>
    </div>
  );
}

export default Gallery;
