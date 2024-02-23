import React from "react";
import Mockup from "../../components/Mockup";
import { Element } from "react-scroll";

const Let: React.FC = () => {
  return (
    <Element name="let">
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
        <Mockup />
        <div className="flex flex-col items-center md:items-start pb-8 md:pb-0 pl-4 md:pl-14 pt-12 md:pt-0 px-4">
          <h2 className="dark:text-white text-center md:text-left font-semibold text-2xl md:text-3xl">
            {"Laissez Camille "}
            <br className="hidden md:block" />
            {"choisir pour vous"}
          </h2>
          <p className="dark:text-white text-center md:text-left text-bold md:text-lg text-base pt-12">
            {"Camille utilise une intelligence artificielle "}
            <br className="hidden md:block" />
            {"pour évaluer votre niveau de dépression en "}
            <br className="hidden md:block" />
            {"temps réel, vous offrir des outils "}
            <br className="hidden md:block" />
            {"personnalisés et vous fournir des "}
            <br className="hidden md:block" />
            {"ressources supplémentaires pour vous "}
            <br className="hidden md:block" />
            {"aider à progresser."}
          </p>
        </div>
      </section>
    </Element>
  );
};
export default Let;
