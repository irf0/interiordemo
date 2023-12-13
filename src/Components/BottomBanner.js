import React from "react";

function BottomBanner() {
  return (
    <div>
      <div className="mx-20 my-10 bg-[#eaf0e4] flex sm:flex-col sm:mx-2 flex-1 rounded-xl align-middle">
        <div className="ml-14 sm:mx-4">
          <img src="/assets/banner.webp" alt="" className="sm:object-contain" />
        </div>
        <div className="w-1/2 text-left ml-20 sm:ml-4">
          <h1 className="text-3xl sm:ml-2 font-bold mt-20 sm:mt-7 ml-10 text-left">
            {" "}
            Create Your <span className="text-blue-950">Dream Home</span> <br />
            in Just 90 Days.
          </h1>
          <button className="m-10 sm:m-3 place-self-start mt-5 p-3 w-40 rounded-md bg-orange-500 text-white font-bold">
            Get in Touch!
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;
