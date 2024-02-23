import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full h-mockupxs dark:text-white flex justify-center items-center text-center bg-gradient-to-b from-clear-modpurple dark:from-header to-clear-modpurple dark:to-clear-blue ">
      <h1 className="text-3xl sm:text-5xl font-noto uppercase ">
        {"Miaou... Ah non"} <br />
        <span className="text-xl sm:text-3xl">
          {"ça fait quel bruit une loutre déjà ?"}
        </span>
      </h1>
    </header>
  );
};
export default Header;
