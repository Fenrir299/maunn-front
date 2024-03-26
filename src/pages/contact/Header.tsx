import React from "react";
import { Element } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

const iconSize: SizeProp = "xl";

const Header: React.FC = () => {
  return (
    <>
      <Element name="contact">
        <section className="mb-48 mt-24">
          <div className=" ">
            <div className="">
              <img
                className="absolute -z-10 blur-3xl  h-128  w-auto right-1/3"
                src={LogoPurple}
                alt="Logo Maunn"
              />
            </div>

            <div>
              <div className="max-w-[42rem] relative z-10 ">
                <h1 className="font-black uppercase text-5xl text-white mb-8 mt-8">
                  {"Contactez-nous."}
                </h1>
                <h2 className="text-white text-opacity-60 text-2xl sm:text-3xl">
                  {
                    "Nous sommes là pour répondre à vos questions et discuter de vos besoins. N'hésitez pas à nous contacter via les coordonnées ci-dessous :"
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-48">
            {contactDetails.map((detail) => (
              <div
                key={detail.icon.toString()}
                className="relative flex items-center space-x-3  px-6 py-5 shadow-sm focus-within:ring-2  focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={detail.icon}
                    style={{ color: "#b13978" }}
                    size={iconSize}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-bold text-white">{detail.title}</p>
                  <p className=" text text-opacity-60 text-white mt-4">
                    {detail.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto">
          <div className="">
            <div className="">
              <iframe
                title="Formulaire de Contact"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeSGk9xpisbLXgKsbgbg8PVZ5u7Jp0Q81aLWbOk4K6_v5B90g/viewform?usp=sf_link" // Remplace avec le lien de ton formulaire Google Forms
                width="100%"
                height="900"
                className="rounded-2xl w-full"
              >
                Chargement en cours...
              </iframe>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Header;

const contactDetails = [
  {
    icon: faEnvelope as IconProp,
    title: "Email",
    content: "contact-admin@info.maunn.fr",
  },
  {
    icon: faMapMarkerAlt as IconProp,
    title: "Adresse",
    content: "14 rue du Faubourg Saint-Honoré, 75008 Paris",
  },
];
