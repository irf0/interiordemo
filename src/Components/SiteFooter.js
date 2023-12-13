import { Call, Email } from "@mui/icons-material";
import React from "react";

function SiteFooter() {
  return (
    <div className="border w-full bg-black flex sm:flex-col flex-1 md:h-96 lg:h-96 justify-between">
      <div className="w-1/2 text-left ml-20 p-5 mt-5 sm:ml-5 sm:p-0 sm:mt-6">
        <a href="http://localhost:3000/">
          <span className="border-2 border-orange-500 text-orange-500 p-2 rounded-sm">
            ID3 Interiors
          </span>
        </a>
        <p className="text-white text-left pt-5 sm:text-sm">
          As The Saying Goes, 'Design Is Not Just What It Looks Like And Feels
          Like. <br />
          Design Is How It Works.' We Are A Young Design Team That Builds
          Workspaces <br />
          That Are Not Just Aesthetic But Functional.
        </p>
      </div>
      <div className="w-1/2 mt-5 p-5 flex flex-col align-middle text-left">
        <h2 className="font-bold text-xl text-white">Let's Connect</h2>
        <button className="border-2 md:w-64 lg:w-64 xl:w-64 mt-3 border-white rounded-lg p-2 hover:border-orange-500 text-white">
          <Call />
          +91 1234567890
        </button>
        <button className="border-2 md:w-64 lg:w-64 xl:w-64 mt-3 border-white rounded-lg p-2 hover:border-orange-500 text-white">
          <Email />
          abcinteriors@gmail.com
        </button>
      </div>
    </div>
  );
}

export default SiteFooter;
