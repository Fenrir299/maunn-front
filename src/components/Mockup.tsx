import React, { useState } from "react";
import MockupIphone from "../assets/other/mockup-iphone-14.png";
import Meditation from "./widget/Meditation";
import Game from "./widget/Game";
import Walk from "./widget/Walk";
import {
  MoonIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Mockup: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="pt-8 md:pt-0" style={{ minHeight: "min-content" }}>
      <div className="relative">
        <img
          className="sm:h-mockup h-mockupxs px-10 sm:px-14 "
          src={MockupIphone}
          alt="mockupiphone"
          style={{ minHeight: "min-content", zIndex: -1 }}
        />
        <div
          className="absolute inset-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-0 left-2 ">
            <div className="absolute -left-6 sm:left-0">
              <div
                className="absolute  border-2 border-black
               dark:border-white 
      h-8 sm:h-12 w-28 sm:w-40 top-20 sm:left-36   left-32 rounded-3xl"
              >
                <div className="absolute  p-2 dark:text-white">
                  <MagnifyingGlassIcon
                    className="sm:h-8 sm:w-8 h-4 w-4"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute px-2 sm:left-40 left-28 top-0 
          dark:text-white"
                  >
                    <Cog6ToothIcon
                      className="sm:h-12 sm:w-12 h-8 w-8"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-20 top-20 dark:text-white">
                <MoonIcon
                  className="h-8 w-8 sm:h-12 sm:w-12"
                  aria-hidden="true"
                />
              </div>

              <div
                className="absolute  border-2 text-clear-modred border-red-camille top-32  sm:top-40
       left-40 sm:left-48 rounded-3xl"
              >
                <h5
                  className="uppercase text-clear-modred dark:text-red-camille text-xs 
                sm:text-base py-1
         sm:py-2 px-2 sm:px-3"
                >
                  {"sos"}
                </h5>
              </div>
            </div>

            <div
              className="absolute top-52 sm:top-60 left-24 sm:left-32 space-y-6
       sm:space-y-12"
            >
              <div
                className={` transform transition duration-500 ${
                  hovered ? "-translate-x-14" : "translate-x-14"
                }`}
              >
                <Meditation />
              </div>
              <div
                className={`transform transition duration-400 ${
                  hovered ? "-translate-x-14" : "translate-x-8"
                }`}
              >
                <Game />
              </div>
              <div
                className={`invisible sm:visible transform transition duration-300 ${
                  hovered ? "-translate-x-14" : "translate-x-20"
                }`}
              >
                <Walk />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
