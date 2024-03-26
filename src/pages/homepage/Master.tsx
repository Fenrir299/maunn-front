import React from "react";
import { Element } from "react-scroll";
import LogoMaunn from "../../assets/logos/logo_maunn_text.svg";

import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

interface MasterProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Master: React.FC<MasterProps> = ({ handleSetActive }) => {
  return (
    <>
      <Element name="header">
        <section className="mb-96 mt-96 flex flex-col items-center w-full justify-center">
          <img className="h-48 w-auto" src={LogoMaunn} alt="Maunn Logo" />
          <p className="mt-8 text-white opacity-60 text-3xl">
            Solutions pour partenaires et experts exigeants.
          </p>
          <Link to="/" className="text-2xl text-secondary hover:underline">
            {"Rejoignez-nous >"}
          </Link>
        </section>
      </Element>
    </>
  );
};

export default Master;
