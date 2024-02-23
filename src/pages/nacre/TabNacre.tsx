import React from "react";
import ValidateBlack from "../../assets/validate-black.svg";
import ValidateWhite from "../../assets/validate-white.svg";

interface TabFunctionnality {
  description: string;
  isNacre: boolean;
  isNacrePlus: boolean;
}

const IsValidate: React.FC<{ isValid: boolean }> = ({ isValid }) => {
  if (isValid) {
    return (
      <>
        <img
          className="w-6 h-6 md:w-10 md:h-10 dark:hidden text-black"
          src={ValidateBlack}
          alt="validate"
        />
        <img
          className="w-6 h-6 md:w-10 md:h-10 hidden dark:flex text-black"
          src={ValidateWhite}
          alt="validate"
        />
      </>
    );
  } else {
    return (
      <div className="w-10 h-10 text-center text-black dark:text-white text-opacity-50 text-3xl font-medium">
        X
      </div>
    );
  }
};

const TabNacre: React.FC = () => {
  const array: Array<TabFunctionnality> = [
    { description: "Personalisation", isNacre: true, isNacrePlus: true },
    { description: "Animation", isNacre: true, isNacrePlus: true },
    { description: "Export de données", isNacre: true, isNacrePlus: true },
    {
      description: "Connexion avec un psychiatre",
      isNacre: true,
      isNacrePlus: true,
    },
    {
      description: "Vidéos de conseils sportifs",
      isNacre: true,
      isNacrePlus: true,
    },
    { description: "Analyse de texte", isNacre: true, isNacrePlus: true },
    { description: "Scan des repas", isNacre: true, isNacrePlus: true },
    { description: "Objets connectés", isNacre: true, isNacrePlus: true },
    {
      description: "Connexion services externes",
      isNacre: false,
      isNacrePlus: true,
    },
    {
      description: "Amélioration des recommandations (IA)",
      isNacre: false,
      isNacrePlus: true,
    },
    {
      description: "Connexion aux applications externe",
      isNacre: false,
      isNacrePlus: true,
    },
  ];
  return (
    <div className="w-full flex justify-center pb-24">
      <div className=" font-noto flex flex-col text-black dark:text-white w-5/6 md:w-4/6">
        <div className="w-full font-bold text-base md:text-2xl flex flex-row justify-between py-6 md:pr-4">
          Fonctionnalités
          <div className="flex flex-row gap-4 md:gap-16">
            <p className="text-base md:text-2xl  italic">Nacre</p>
            <p className="text-base md:text-2xl italic">Nacre+</p>
          </div>
        </div>
        {array.map((value) => {
          return (
            <div
              key={value.description}
              className="w-full border-b font-bold text-sm md:text-xl font-sans border-black dark:border-white flex flex-row justify-between py-4"
            >
              {value.description}
              <div className="flex flex-row gap-8 md:gap-28 pr-4 md:pr-8 text-black">
                <IsValidate isValid={value.isNacre} />
                <IsValidate isValid={value.isNacrePlus} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabNacre;
