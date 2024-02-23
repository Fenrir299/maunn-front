import React from "react";
import Header from "./Header";
import MoneySvg from "../../assets/money.svg";
import HouseSvg from "../../assets/house.svg";
import QuestSvg from "../../assets/quest.svg";
import MergedIslandSvg from "../../assets/mergedIsland.svg";

const Money: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-background items-center pt-32 pb-16 gap-12">
      <h3 className="text-2xl md:text-4xl w-full dark:text-yellow-camille font-noto uppercase text-center px-4 ">
        {"OBTENEZ DE LA MONNAIE EN VOUS"}
        <br />
        {"FOCALISANT SUR VOS ACTIVITÉS"}
      </h3>
      <p className="text-black dark:text-white text-center px-4 text-xs md:text-xl">
        {"Le but, c’est de rester actif !"}
        <br />
        {"Mais lorsqu’on est en dépression, c’est parfois insurmontable."}
        <br />
        {
          "Pour ça nous avons voulu gamifier Camille pour que l’accomplissement des activités du quotidien soient récompensées."
        }
        <br />
        {"Obtenez des tonnes de récompenses avec la monnaie de Camille !"}
      </p>
      <div className="w-full flex justify-center pb-8">
        <img
          src={MoneySvg}
          alt="The pro"
          className="w-3/4 md:w-2/4 lg:w-1/4 block object-cover z-10"
        />
      </div>
    </div>
  );
};

const House: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white-header dark:bg-darkbg justify-center items-center px-12 py-12 gap-12 relative">
      <div className="w-full py-12 hidden md:flex bg-white dark:bg-background absolute top-0" />
      <div className="w-full md:w-1/2 pt-12 flex flex-col text-black dark:text-white gap-8">
        <h4 className="text-xl md:text-4xl text-center md:text-right z-10">
          {"Offrez vous une maison"}
        </h4>
        <p className="text-center md:text-right text-xs md:text-base z-10">
          {"Obtenez de la monnaie virtuelle grâce à vos"}
          <br />
          {"tâches journalières."}
          <br />
          {"Accumulez des moules, nautiles et perles pour"}
          <br />
          {"vous offrir votre nouveau foyer."}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center pb-8">
        <img
          src={HouseSvg}
          alt="The pro"
          className="w-full object-cover z-10"
        />
      </div>
    </div>
  );
};

const Quest: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white dark:bg-background justify-center items-center px-12 py-12 gap-12 relative">
      <div className="w-full md:w-1/2 flex flex-col text-black dark:text-white gap-8">
        <h4 className="text-xl md:text-4xl text-center z-10">
          {"Pas de micro-transactions"}
        </h4>
        <p className="text-center text-xs md:text-base z-10">
          {"Une seule façon, d’obtenir de la monnaie, réalisez vos"}
          <br />
          {"activités quotidiennes !"}
          <br />
          {"Nous sommes là pour vous accompagner, pas vous ruiner."}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center pb-8">
        <img
          src={QuestSvg}
          alt="The pro"
          className="w-full object-cover z-10"
        />
      </div>
    </div>
  );
};

const MergedIsland: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white-header dark:bg-darkbg justify-center items-center px-12 py-12 gap-12 relative">
      <div className="w-full py-12 hidden md:flex bg-white dark:bg-background absolute top-0" />
      <div className="w-full md:w-1/2 pt-12 flex flex-col text-black dark:text-white gap-8">
        <h4 className="text-xl md:text-4xl text-center md:text-right z-10">
          {"Assemblez votre île"}
        </h4>
        <p className="text-center md:text-right text-xs md:text-base z-10">
          {"Vous pouvez cumuler les résidence. Et à la"}
          <br />
          {" manière d’un jeu très connu dont je ne dirais pas"}
          <br />
          {"le nom, personnaliser votre experience."}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center pb-8">
        <img
          src={MergedIslandSvg}
          alt="The pro"
          className="w-full object-cover z-10"
        />
      </div>
    </div>
  );
};

const AllDayOneAdvance: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-background items-center pt-32 pb-16 gap-12">
      <h3 className="text-2xl md:text-4xl w-full dark:text-yellow-camille font-noto uppercase text-center px-4 ">
        {"CHAQUE JOUR EST UNE AVANCÉ"}
      </h3>
      <p className="text-black dark:text-white text-center px-4 text-xs md:text-base">
        {
          "Ne vous focalisez plus sur la souffrance que vous ressentez, Camille s’occupe de tout pour"
        }
        <br />
        {"que vous restiez actifs."}
        <br />
        {"Et vous verrez, ça aussi, ça passera !"}
      </p>
    </div>
  );
};

const Island: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background overflow-x-hidden w-full">
      <Header />
      <Money />
      <House />
      <Quest />
      <MergedIsland />
      <AllDayOneAdvance />
    </div>
  );
};
export default Island;
