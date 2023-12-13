import { DoneAll } from "@mui/icons-material";
import React from "react";

function HighlightSection() {
  return (
    <div>
      <div className="flex sm:flex-col border-2 border-orange-500 w-95vw md:h-96 lg:h-96 sm:m-2 sm:mr-2 rounded-lg bg-[#fff7eb] m-10 mr-20  relative sm:p-3">
        <img
          src="/assets/banner1.webp"
          alt="banner1"
          className="bg-contain rounded-md"
        />
        <div className="m-10 sm:m-2 flex">
          <img
            src="/assets/design.svg"
            alt=""
            className="h-20 w-20 mr-10 sm:h-10 sm:w-10 sm:mr-1"
          />
          <div className="flex-col sm:ml-1 text-left flex-wrap overflow-hidden">
            <h1 className="text-2xl sm:text-lg text-[#100987] font-bold">
              Design & Build
            </h1>
            <h2 className="text-lg sm:text-base font-semibold">
              90 Days Commitment
            </h2>
            <div className="text-left flex flex-col gap-3">
              <p>
                <DoneAll className="text-[#32a852]" /> Each beautifully executed
                project comes with a story of how the team at ID3 Designs worked
                towards <br />
                <span className="ml-6 sm:ml-0">
                  {" "}
                  pulling out the best of ideas and creative solutions.
                </span>
              </p>
              <p>
                <DoneAll className="text-[#32a852]" /> Each project is not just
                ‘one more happy client’ added to our list but a remarkable
                experience our team{" "}
                <span className="ml-7 sm:ml-0"> shares together.</span>
              </p>
              <p>
                <DoneAll className="text-[#32a852]" /> Our design and build
                approach is simple – it’s Experiential and Innovative! Through
                research,{" "}
                <span className="ml-7 sm:ml-0">
                  experience, and a knack for innovation, we bring to the table
                  a solution that works best for your office.
                </span>
              </p>
            </div>
            <div className="gap-5 sm:gap-3 flex m-10 justify-start sm:m-4 sm:-ml-5">
              <button className="bg-gray-200 text-blue-700 p-3 sm:p-1 rounded-md sm:w-28 sm:text-sm">
                Timely Execution
              </button>
              <button className="bg-gray-200 text-blue-700 p-3 sm:p-1 rounded-md sm:w-28 sm:text-sm">
                Cost Effective
              </button>
              <button className="bg-gray-200 text-blue-700 p-3 sm:p-1 rounded-md sm:w-28 sm:text-sm">
                Technology Driven
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightSection;
