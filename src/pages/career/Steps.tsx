import React from "react";
import { Element } from "react-scroll";

const Steps: React.FC = () => {
  return (
    <>
      <Element name="steps">
        <section className="mb-48 mt-24">
          <h1 className="">{"Les étapes pour nous rejoindre."}</h1>
          <ul className="list-disc list-inside text-lg text-opacity-80 text-white">
            <li>{"Consultant en Transformation Numérique"}</li>
            <li>{"Développeur Full Stack"}</li>
            <li>{"Expert en Cybersécurité"}</li>
            <li>{"Technicien Opérateurs réseaux"}</li>
            {/* Ajoute d'autres opportunités selon les besoins de ton entreprise */}
          </ul>
        </section>
      </Element>
    </>
  );
};

export default Steps;
