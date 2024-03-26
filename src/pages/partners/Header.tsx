import React from "react";
import { Element, Link } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";

interface HeaderProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSetActive }) => {
  return (
    <>
      <Element name="partners">
        {/* Section d'en-tête */}

        <section className="mb-48 mt-24 items-right justify-end ">
          <div className=" ">
            <div className="">
              <img
                className="absolute -z-10 blur-3xl  h-128  w-auto right-1/3"
                src={LogoPurple}
              ></img>
            </div>

            <div className="flex justify-center text-center">
              <div className="max-w-[64rem] relative z-10  ">
                <h1 className="font-black uppercase text-5xl text-white mb-8 mt-8">
                  {"Partenaires MAUNN."}
                </h1>

                <h2 className="text-white text-opacity-60 text-2xl sm:text-3xl">
                  {
                    "Collaborons pour créer l'avenir ensemble. MAUNN travaille en partenariat avec des entreprises de premier plan pour catalyser la transformation digitale et relever les défis technologiques du futur."
                  }
                </h2>
              </div>
            </div>
            <div className=" flex items-center justify-center w-full">
              <div className="py-6 mt-4 flex items-start sm:items-center gap-6 flex-col sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded bg-secondary px-6 py-2 cursor text-xl font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  {"Contactez-nous"}
                </Link>
                <Link to="/" className="text-secondary text-xl">
                  {"Plus d'informations"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section du contenu de la page Partenaires */}
      </Element>
    </>
  );
};
export default Header;
