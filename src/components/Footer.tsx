import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Instagram = "https://www.instagram.com/camille_assistant.app";
const Linkedin =
  "https://fr.linkedin.com/company/camille-assistant-de-r%C3%A9mission";
const size = 8;

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 bg-white-header dark:bg-header">
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="space-y-4 text-center sm:text-left">
            <p className="font-noto uppercase dark:text-white text-2xl">
              Camille
            </p>
            <div className="flex flex-row space-x-2 pl-6 sm:pl-0 text-center sm:text-left bg-opacity-40 h-full rounded-2xl">
              <FontAwesomeIcon
                icon={faInstagram}
                className={`h-${size} w-${size} ${
                  Instagram
                    ? "hover:text-clear-modred dark:text-white dark:hover:text-yellow-camille cursor-pointer"
                    : "text-gray-300 opacity-20"
                }`}
                onClick={
                  Instagram ? () => window.open(Instagram, "_blank") : undefined
                }
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`h-${size} w-${size} ${
                  Linkedin
                    ? "hover:text-clear-modred dark:text-white dark:hover:text-yellow-camille cursor-pointer"
                    : "text-gray-300 opacity-20"
                }`}
                onClick={
                  Linkedin ? () => window.open(Linkedin, "_blank") : undefined
                }
              />
            </div>
            <div className="pt-12 ">
              <Link
                to="/about"
                className="dark:text-white text-center font-bold hover:underline"
              >
                Paramètre des cookies
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="dark:text-white flex flex-col sm:w-48 w-32 space-y-4">
              <span className="dark:text-yellow-camille font-black text-clear-modred">
                Produit
              </span>
              <Link to="/about" className="dark:text-white hover:underline">
                A propos
              </Link>
              <Link to="/island" className="dark:text-white hover:underline">
                Island
              </Link>
            </div>

            <div className="dark:text-white flex flex-col items-end md:items-start sm:w-48 w-32 space-y-4">
              <span className="dark:text-yellow-camille font-black text-clear-modred">
                Ressources
              </span>
              <Link to="/about" className="dark:text-white hover:underline">
                Blog
              </Link>
              <Link to="/contact" className="dark:text-white hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="font-thin container justify-center mt-16">
          <div className="border-t-2 dark:border-white border-black border-opacity-60 w-full py-12 pb-24 text-xs flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
            <p className="dark:text-white">
              ©{new Date().getFullYear()}, Camille. Tout droit reservé.
            </p>
            <div className="flex flex-row gap-4">
              <Link to="/privacy" className="dark:text-white hover:underline">
                Politique de confidentialité
              </Link>
              <p className="dark:text-white hover:underline">
                Termes et services
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
