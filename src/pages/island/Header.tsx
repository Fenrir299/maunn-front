import React from "react";
import Wave from "../../assets/wave.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-white-header dark:bg-header overflow-x-hidden w-full justify-start items-center  h-72  md:h-mockupxs lg:h-mockup flex flex-col relative">
      <h1 className="text-2xl md:text-4xl lg:text-5xl dark:text-white font-noto uppercase text-center pt-4 md:pt-8 lg:pt-16">
        {"CRÉEZ VOTRE ESPACE"}
      </h1>
      <div className="w-full pt-8">
        <img
          src={Wave}
          alt="The pro"
          className="w-full absolute bottom-0 object-cover z-10"
        />
      </div>
    </header>
  );
};
export default Header;
