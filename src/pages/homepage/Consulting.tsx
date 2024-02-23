import React from "react";
import { Element } from "react-scroll";

const Consulting: React.FC = () => {
  return (
    <Element name="Consulting">
      <section className="flex flex-col md:flex-row text-left items-center justify-between pt-12">
        <div className="max-w-2xl">
          <dt className="text-2xl font-semdibold mb-1 text-white">
            {"Mise à disposition d'experts et de managers de transition."}
          </dt>

          <dl className="text-tierce py-8 text-xl md:text-2xl">
            {
              "MAUNN est spécialisé dans le conseil, l’expertise et vous assiste dans réalisation de l’ensemble de vos projets numériques. De l’expression du besoin au déploiement de la solution."
            }
          </dl>
          <dt className="text-2xl font-semdibold mb-1 text-white">
            {"Assitance dans vos projets informatiques"}
          </dt>
          <dl className="text-tierce py-8 text-xl md:text-2xl">
            {
              " MAUNN vous assiste sur l’ensemble des étapes d’un projet informatique. MAUNN intervient également en tant que manager de transition. Innovation technique, disponibilité, et conseil sont les valeurs autour desquelles s’articule notre vision."
            }
          </dl>
        </div>
        <img
          className="rounded-3xl hidden md:flex   h-auto ml-12 w-1/2 shadow-secondary/50 shadow-xl border-4 border-secondary contrast-75 "
          alt="consulting"
          src="https://source.unsplash.com/800x600/?computing"
        ></img>
      </section>
    </Element>
  );
};
export default Consulting;
