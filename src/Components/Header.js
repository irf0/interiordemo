import {
  Close,
  CloseOutlined,
  CloseSharp,
  MenuOpen,
  WhatsApp,
} from "@mui/icons-material";
import React, { useState } from "react";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-full h-20 bg-transparent text-blue-950 text-lg font-bold justify-around flex align-middle text-center">
      <div className={`${showSidebar ? "hidden" : "ml-4 my-5"} cursor-pointer`}>
        <a href="http://localhost:3000/">
          <span className="border-2 border-orange-500 text-orange-500 p-2 rounded-sm">
            ID3 Interiors
          </span>
        </a>
      </div>
      <div>
        <ul className="flex-row cursor-pointer flex gap-4 mr-4 my-5 sm:hidden md:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <button className="p-2 -mt-2 rounded-md bg-orange-500 text-white font-bold ">
            <WhatsApp />
            +91 1234567890
          </button>
        </ul>
        {!showSidebar && (
          <div
            onClick={() => setShowSidebar(true)}
            className="xl:hidden lg:hidden my-5"
          >
            <MenuOpen className="text-4xl" />
          </div>
        )}
        {showSidebar && (
          <div className="animate-slide-in relative z-50 w-100vw h-97vh bg-black xl:hidden lg:hidden rounded-md">
            <div className="h-8 w-8 animate-none absolute right-1 m-3  rounded-full">
              <Close
                className="text-orange-500 text-2xl"
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="text-white absolute left-14 m-3 mt-5">
              <a href="http://localhost:3000/">
                <span className="border-2 border-orange-500 text-orange-500 p-2 rounded-sm">
                  ID3 Interiors
                </span>
              </a>
            </div>
            <ul className="pt-28 flex justify-start gap-6 text-white flex-col">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>OUR BLOG</li>
              <li>CONTACT US</li>
              <li>MEET THE TEAM</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
