import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Breakfast from "./widget/Breakfast";
import Gratitude from "./widget/Gratitude";

const Act: React.FC = () => {
  const [hovered, setHovered] = React.useState<boolean>(false);

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
            hovered ? "rotate-12 -translate-y-16" : " "
          }`}
        >
          <Gratitude />
        </div>
        <div
          className={`transform transition duration-700 ${
            hovered
              ? "-rotate-6 translate-x-16"
              : " translate-x-20 -translate-y-6"
          }`}
        >
          <Breakfast />
        </div>
        <div
          className="absolute bottom-0 md:-right-16 md:top-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <EyeIcon className="cursor-pointer h-8 w-auto dark:text-opacity-40 hover:text-yellow-camille dark:hover:text-yellow-camille dark:text-white" />
        </div>
      </div>
    </section>
  );
};

export default Act;
