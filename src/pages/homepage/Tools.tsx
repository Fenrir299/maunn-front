import React from "react";
import { Element } from "react-scroll";
import Pile from "../../components/Pile";

const Tools: React.FC = () => {
  return (
    <Element name="Tools">
      <section className="w-full h-mockupxs md:h-mockup flex flex-col md:flex-row dark:text-white bg-white-header dark:bg-darkbg">
        <div className="flex flex-col justify-center items-center md:items-end w-full h-1/2 md:w-1/2 md:h-full px-4 md:px-0 pr-0 md:pr-12">
          <h3 className="font-semibold text-center md:text-left text-2xl md:text-3xl">
            Obtenez les outils
          </h3>
          <p className="dark:text-white text-center md:text-right text-bold md:text-lg text-base pt-12">
            {"Grâce à un système de Widgets,"}
            <br className="hidden md:block" />
            {" Camille se focalise sur les"}
            <br className="hidden md:block" />
            {"principaux symptômes de la dépression et"}
            <br className="hidden md:block" />
            {" propose des outils adaptés à chacun pour mieux"}
            <br className="hidden md:block" />
            {" gérer le trouble dépressif."}
          </p>
        </div>
        <div className="w-full h-1/2 md:h-full md:w-1/2  md:pl-5  flex items-center pr-12 md:pr-0 justify-center md:justify-start">
          <Pile />
        </div>
      </section>
    </Element>
  );
};
export default Tools;
