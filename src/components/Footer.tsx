import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logos/logo_maunn_mono_purple.svg";

const Linkedin = "https://fr.linkedin.com/company/maunn";
const size = 8;

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 bg-white-header bg-header">
      <div className="container mx-auto py-16 ">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="space-y-4 text-center sm:text-left">
            <div className="hidden lg:flex lg:flex-row items-center">
              <img className="h-8 w-auto" src={Logo} alt="maunn" />
              <h1 className="text-white hover:text-secondary font-black gap-x-2 text-2xl mr-4 ml-2 transition-colors current">
                MAUNN
              </h1>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`h-${size} w-${size} ${
                  Linkedin
                    ? "hover:text-blue-500 transition-colors current text-white ml-12"
                    : "text-gray-300 opacity-20"
                }`}
                onClick={
                  Linkedin ? () => window.open(Linkedin, "_blank") : undefined
                }
              />
            </div>
            <div className="flex flex-row space-x-2 pl-6 sm:pl-0 text-center sm:text-left bg-opacity-40 h-full rounded-2xl"></div>
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="text-white flex flex-col sm:w-48 w-32 space-y-4">
              <p className="text-secondary font-black text-xl ">A propos</p>
              <Link to="/" className="text-white hover:underline">
                Présentation
              </Link>
              <Link to="/sectors" className="text-white hover:underline">
                {"Secteurs d'activités"}
              </Link>
            </div>

            <div className="text-white flex flex-col items-end md:items-start sm:w-48 w-32 space-y-4">
              <span className="text-secondary font-black text-xl">
                Nous rejoindre
              </span>
              <Link to="/career" className="text-white hover:underline">
                Experts
              </Link>
              <Link to="/partners" className="text-white hover:underline">
                Entreprises
              </Link>
            </div>
          </div>
        </div>

        <div className="font-thin container justify-center mt-16">
          <div className="border-t-2 border-white border-black border-opacity-60 w-full py-12 pb-24 text-xs flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
            <p className="text-white">
              ©{new Date().getFullYear()}, MAUNN. Tout droit reservé.
            </p>
            <div className="flex flex-row gap-4">
              <Link to="/privacy" className="text-white hover:underline">
                Politique de confidentialité
              </Link>
              <p className="text-white hover:underline">Termes et services</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
