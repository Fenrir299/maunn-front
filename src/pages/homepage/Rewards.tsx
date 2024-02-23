import React from "react";
import { Element } from "react-scroll";
import Chest from "../../assets/other/chest.svg";

const Rewards: React.FC = () => {
  return (
    <Element name="Rewards">
      <section className=" bg-clear-modpurple  dark:bg-darkbg w-full h-mockup md:h-mockup">
        <div className="flex flex-col md:flex-row  items-center w-full h-full">
          <div className="flex flex-col items-end justify-center w-full h-1/2 md:h-full md:w-1/2 px-4">
            <h1 className="dark:text-white text-center md:text-right font-semibold text-3xl md:text-4xl pb-8 w-full">
              {"Obtenez des"}
              <br className="hidden md:block" />
              {" récompenses"}
            </h1>
            <p className="dark:text-white text-base md:text-lg text-center md:text-right">
              {"Camille transforme votre parcours de gestion du"}
              <br className="hidden md:block" />
              {" trouble dépressif en un jeu stimulant. Gagnez de"}
              <br className="hidden md:block" />
              {" la monnaie virtuelle en accomplissant des"}
              <br className="hidden md:block" />
              {" tâches et en atteignant des objectifs pour"}
              <br className="hidden md:block" />
              {" personnaliser votre expérience avec des items"}
              <br className="hidden md:block" />
              {" exclusifs."}
            </p>
          </div>
          <div className="flex items-center justify-center h-1/2 w-auto md:h-auto md:w-1/2">
            <img className="w-full h-full" src={Chest} alt="chest" />
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Rewards;
