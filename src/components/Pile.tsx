import React, { useState } from "react";
import Sport from "./widget/Sport";
import { EyeIcon } from "@heroicons/react/24/outline";
import Documentation from "./widget/Documentation";

const Pile: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section className="absolute">
      <div className="relative">
        <div
          className={`transform transition duration-500 ${
            hovered
              ? "rotate-12 -translate-y-16 translate-x-16"
              : "translate-x-16 "
          }`}
        >
          <Sport />
        </div>
        <div
          className={`transform transition duration-700${
            hovered
              ? "-rotate-6 -translate-x-12"
              : "translate-x-8 -translate-y-12"
          }`}
        >
          <Documentation />
        </div>
        <div className="absolute inset-0">
          <EyeIcon
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer h-8 w-auto dark:text-opacity-40 hover:text-yellow-camille dark:hover:text-yellow-camille dark:text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Pile;
