import React from "react";
import ProImage from "../../assets/pro.svg";
const Header: React.FC = () => {
  return (
    <header className="overflow-x-hidden w-full flex justify-center items-center h-mockup  bg-white-header dark:bg-header relative">
      <img
        src={ProImage}
        alt="The pro"
        className="h-1/2 md:h-full block object-cover z-10"
      />
      <div className="bg-white dark:bg-background h-3/6 md:h-2/6 bottom-0 w-full absolute z-0" />
    </header>
  );
};
export default Header;
