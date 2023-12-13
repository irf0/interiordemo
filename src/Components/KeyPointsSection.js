import React from "react";

function KeyPointsSection() {
  return (
    <div className="bg-[#ebefff] md:h-96 lg:h-96 w-full flex sm:flex-col flex-1">
      <div className="w-1/2 text-left ml-20 sm:ml-1">
        <h1 className="m-10 font-bold text-4xl sm:m-3 sm:text-xl">
          Get your <span className="text-blue-900">Dream Home</span> <br />{" "}
          designed and built in 90 days!
        </h1>
        <button className="ml-10 sm:ml-3 p-3 w-40 rounded-md bg-orange-500 text-white font-bold">
          Get in Touch!
        </button>
      </div>
      <div className="w-1/2 flex">
        <div className="">
          <div className="w-64 h-40 sm:w-36 sm:h-36 m-5 sm:m-2 rounded-md bg-white flex justify-center align-middle">
            <h2 className="mt-10 text-center text-blue-900 text-5xl font-bold">
              7+ <br />
              <span className="text-base">Years of Experience</span>
            </h2>
          </div>

          <div className="w-64 h-40 sm:w-36 sm:h-36 m-5 sm:m-2 rounded-md bg-white flex justify-center align-middle">
            <h2 className="mt-10 text-center text-blue-900 text-5xl font-bold">
              450+ <br />
              <span className="text-base">Successful Projects</span>
            </h2>
          </div>
        </div>

        <div>
          <div className="w-64 h-40 sm:w-36 sm:h-36 m-5 sm:m-2 rounded-md bg-white flex justify-center align-middle">
            <h2 className="mt-10 text-center text-blue-900 text-5xl font-bold">
              100% <br />
              <span className="text-base">Repeat Ratio</span>
            </h2>
          </div>

          <div className="w-64 h-40 sm:w-36 sm:h-36 m-5 sm:m-2 rounded-md bg-white flex justify-center align-middle">
            <h2 className="mt-10 text-center text-blue-900 text-5xl font-bold">
              50+ <br />
              <span className="text-base">Team Members</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyPointsSection;
