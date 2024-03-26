import React from "react";
import { Element } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";
import { Link } from "react-router-dom";

const CareerPage: React.FC = () => {
  return (
    <>
      <Element name="career">
        {/* Section du contenu de la page Carrière */}
        <section className="max-w-[42rem] relative z-10">
          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {"Pourquoi rejoindre MAUNN ?"}
            </h2>
            <p className="text-lg text-opacity-80 text-white">
              {
                "Chez MAUNN, nous croyons en la puissance de la technologie pour transformer les entreprises. En rejoignant notre équipe, vous ferez partie d'un groupe d'experts dédiés à résoudre des défis complexes et à créer des solutions innovantes. Nous favorisons un environnement collaboratif où votre expertise est valorisée."
              }
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {"Opportunités de Carrière"}
            </h2>
            <ul className="list-disc list-inside text-lg text-opacity-80 text-white">
              <li>{"Consultant en Transformation Numérique"}</li>
              <li>{"Développeur Full Stack"}</li>
              <li>{"Expert en Cybersécurité"}</li>
              <li>{"Technicien Opérateurs réseaux"}</li>
              {/* Ajoute d'autres opportunités selon les besoins de ton entreprise */}
            </ul>
          </div>

          <div className="py-6 mt-4 flex items-start sm:items-center gap-6 flex-col sm:flex-row">
            <Link
              to="/contact"
              className="rounded bg-secondary px-6 py-2 cursor text-xl font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {"Postulez maintenant"}
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
