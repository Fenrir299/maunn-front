import React from "react";
import { Element } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";
import { Link } from "react-router-dom";

const CareerPage: React.FC = () => {
  return (
    <>
      <Element name="career">
        <section className="max-w-[42rem] relative z-10">
          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {"Pourquoi devenir partenaire avec MAUNN ?"}
            </h2>
            <p className="text-lg text-opacity-80 text-white">
              {
                "En tant que partenaire MAUNN, vous bénéficierez d'une collaboration stratégique pour transformer votre entreprise. Nous offrons des solutions sur mesure, une expertise approfondie et un engagement à long terme pour atteindre vos objectifs commerciaux."
              }
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {"Avantages du partenariat"}
            </h2>
            <ul className="list-disc list-inside text-lg text-opacity-80 text-white">
              <li>
                {"Accès à une équipe d'experts en transformation numérique."}
              </li>
              <li>
                {
                  "Solutions personnalisées pour répondre à vos besoins spécifiques."
                }
              </li>
              <li>
                {
                  "Collaboration continue pour rester à la pointe de la technologie."
                }
              </li>
              {/* Ajoute d'autres avantages selon la nature de tes partenariats */}
            </ul>
          </div>

          <div className="py-6 mt-4 flex items-start sm:items-center gap-6 flex-col sm:flex-row">
            <Link
              to="/contact"
              className="rounded bg-secondary px-6 py-2 cursor text-xl font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {"Devenez notre partenaire"}
            </Link>
            <Link to="/" className="text-secondary text-xl">
              {"En savoir plus sur MAUNN"}
            </Link>
          </div>
        </section>
      </Element>
    </>
  );
};

export default CareerPage;
