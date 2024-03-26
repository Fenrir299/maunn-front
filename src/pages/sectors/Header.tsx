import React from "react";
import { Element } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import {
  faBuilding,
  faComputer,
  faFlask,
  faMoneyBill,
  faShuttleSpace,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

const iconSize: SizeProp = "2xl";

const sector = [
  {
    name: "Informatique",
    theme: "IT",
    role: "Maunn offre une expertise pointue dans le domaine de l'informatique, en proposant des solutions innovantes et adaptées aux défis technologiques émergents. Notre équipe de consultants spécialisés accompagne les entreprises pour optimiser leurs systèmes, assurer la sécurité des données et favoriser l'innovation numérique.",
    icon: faComputer as IconProp,
  },
  {
    name: "Aérospatial",
    theme: "Aero",
    role: "En tant que partenaire stratégique dans le secteur aérospatial, Maunn apporte son savoir-faire pour résoudre des problématiques complexes, allant de la conception à la maintenance des systèmes. Nous collaborons avec des entreprises du secteur pour stimuler l'efficacité opérationnelle, la sécurité et l'innovation technologique.",
    icon: faShuttleSpace as IconProp,
  },
  {
    name: "Bancaire",
    theme: "Bank",
    role: "Maunn se positionne comme un acteur clé dans le secteur bancaire, offrant des services de consultation spécialisés pour améliorer la gestion des données, renforcer la sécurité financière et optimiser les processus opérationnels. Notre approche personnalisée vise à accompagner nos clients vers l'excellence dans un environnement financier en constante évolution.",
    icon: faMoneyBill as IconProp,
  },
  {
    name: "Recherche",
    theme: "Research",
    role: "Le secteur de la recherche bénéficie de l'expertise de Maunn pour relever les défis scientifiques et technologiques. Nous collaborons avec des institutions de recherche et des laboratoires pour mettre en place des solutions informatiques avancées, accélérer la collecte et l'analyse de données, et favoriser l'innovation dans le domaine de la recherche.",
    icon: faFlask as IconProp,
  },
  {
    name: "Génie Civil",
    theme: "Construction",
    role: "Dans le domaine du génie civil, Maunn apporte son expertise pour la gestion de projets d'infrastructures complexes. Notre équipe de consultants travaille en collaboration avec les acteurs du secteur pour assurer la planification efficace, la durabilité environnementale et la réussite des projets d'ingénierie civile.",
    icon: faBuilding as IconProp,
  },
  {
    name: "Distribution",
    theme: "Distribution",
    role: "Maunn s'engage à soutenir les entreprises de distribution en optimisant leurs chaînes d'approvisionnement, en mettant en œuvre des technologies de pointe et en améliorant l'expérience client. Notre approche stratégique aide les entreprises à rester compétitives dans un marché en constante évolution.",
    icon: faTruck as IconProp,
  },
];

interface HeaderProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSetActive }) => {
  return (
    <>
      <Element name="header">
        <section className="mb-48 mt-24">
          <div className=" ">
            <div className="">
              <img
                className="absolute -z-10 blur-3xl  h-128  w-auto right-1/3"
                src={LogoPurple}
              ></img>
            </div>

            <div>
              <div className="max-w-[42rem] relative z-10 ">
                <h1 className="font-black uppercase text-5xl text-white mb-8 mt-8">
                  {"Découvrez nos secteurs d'activités."}
                </h1>
                <h2 className="text-white text-opacity-60 text-2xl sm:text-3xl">
                  {
                    "Notre expertise s'étend à travers une multitude d'industries, chacune présentant ses propres défis et opportunités. Nous comprenons les subtilités de ces secteurs et proposons des services spécialisés adaptés à leurs besoins spécifiques :"
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-48">
            {sector.map((description) => (
              <div
                key={description.theme}
                className="relative flex items-center space-x-3  px-6 py-5 shadow-sm focus-within:ring-2  focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={description.icon}
                    style={{ color: "#b13978" }}
                    size={iconSize}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <dl className="text-white y">
                    <p className=" ml-4 text-xl text-white hover:text-secondary  font-semibold mb-4">
                      {description.name}
                    </p>
                    <p className="ml-4 text-opacity-60 text-lg  text-white ">
                      {description.role}
                    </p>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Element>
    </>
  );
};
export default Header;
