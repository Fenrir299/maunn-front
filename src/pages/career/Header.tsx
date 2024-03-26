import React from "react";
import { Element, Link } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";

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
                  {"Rejoignez l'équipe MAUNN."}
                </h1>
                <h2 className="text-white text-opacity-60 text-2xl sm:text-3xl">
                  {
                    "Vous êtes passionné par la technologie et vous cherchez à faire partie d'une équipe innovante ? MAUNN offre des opportunités de carrière stimulantes. Rejoignez-nous pour participer aux grandes transformations des entreprises."
                  }
                </h2>
              </div>
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
      </Element>
    </>
  );
};
export default Header;
