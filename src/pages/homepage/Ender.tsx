import React from "react";
import { Link, Element } from "react-scroll";
import CEnder from "../../assets/home/camille-ender.png";
import { LockClosedIcon } from "@heroicons/react/24/outline";

interface EnderProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Ender: React.FC<EnderProps> = ({ handleSetActive }) => {
  return (
    <>
      <Element name="header">
        <section className="mb-48 mt-24">
          <div className="flex justify-center ">
            <div>
              <div className="max-w-[42rem] relative z-10 ">
                <h1 className="font-black uppercase text-5xl text-white mb-8 mt-8 text-center ">
                  {"Improve your business."}
                </h1>
                <h2 className="text-white text-opacity-60 text-2xl sm:text-3xl text-center">
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
export default Ender;
