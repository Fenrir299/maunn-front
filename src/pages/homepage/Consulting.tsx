import React from "react";
import { Element } from "react-scroll";

const Consulting: React.FC = () => {
  return (
    <Element name="Consulting">
      <section className="flex flex-col md:flex-row text-left items-center justify-between pt-12">
        <div className="max-w-2xl">
          <dt className="text-2xl font-semdibold mb-1 text-white">
            {
              "Plus qu'un prestataire, un partenaire sur l'ensemble de vos projets."
            }
          </dt>

          <dl className="text-white text-opacity-60  py-8 text-xl md:text-2xl">
            {
              "MAUNN se veut être un partenaire de choix vous accompagnant sur vos projets de l’étude à la réalisation, de la Clienttenance à l’évolution . Soucieux et à l’écoute, nos experts sont disposés à trouver des solutions et des compromis à vos problématiques métiers. "
            }
          </dl>
          <dt className="text-2xl font-semdibold mb-1 text-white">
            {"Assitance dans vos projets informatiques"}
          </dt>
          <dl className="text-white text-opacity-60 py-8 text-xl md:text-2xl">
            {
              " Se formant continuellement aux nouvelles technologies, nos développeurs sont à même de prendre en charge tout ou partie de vos projets."
            }
          </dl>
        </div>
        <img
          className="rounded-3xl hidden md:flex   h-auto ml-12 w-1/3  "
          alt="shardev"
          src="../src/assets/sharkdev.png"
        ></img>
      </section>
    </Element>
  );
};
export default Consulting;
