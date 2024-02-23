import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white-header dark:bg-header overflow-x-hidden w-full flex flex-col gap-16 justify-center items-center h-mockupxxs">
      <h1 className="text-3xl md:text-5xl dark:text-white font-noto uppercase text-center px-4 ">
        {"Passez à Nacre"}
      </h1>
      <h2 className="text-2xl md:text-4xl w-full md:w-3/5 text-yellow-camille font-noto uppercase text-center px-4 ">
        {"Une version avec des nouvelles fonctionnalitées"}
      </h2>
    </header>
  );
};
export default Header;
