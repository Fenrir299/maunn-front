import { LockClosedIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, Element } from "react-scroll";
import AboutHeader from "../../assets/about-header.svg";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";
import "../../index.css";

interface HeaderProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSetActive }) => {
  return (
    <>
      <Element name="header">
        <section className="mb-48 mt-24">
          <div className=" ">
            <div className="">
              <img
                className="absolute -z-10 blur-3xl h-128  w-auto"
                src={LogoPurple}
              ></img>
            </div>

            <div>
              <div className="max-w-[42rem] relative z-10 ">
                <h1 className="font-black uppercase text-5xl text-white mb-8 mt-8">
                  {"The desire to change technology."}
                </h1>
                <h2 className="text-tierce text-2xl sm:text-3xl">
                  {
                    "MAUNN est l’architecte des grandes transformations des entreprises. Nous mettons en relations nos experts avec nos partenaires."
                  }
                </h2>
              </div>
              <div className="flex items-center justify-center pt-24"></div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};
export default Header;
