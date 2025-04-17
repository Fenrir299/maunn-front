import React from "react";
import { Element } from "react-scroll";
import LogoPurple from "../../assets/logos/logo_maunn_mono_purple.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import SEO from "../../components/SEO";
import { OrganizationStructuredData } from "../../components/StructuredData";

const iconSize: SizeProp = "xl";

const Header: React.FC = () => {
  return (
    <>
      {/* SEO spécifique à la page contact */}
      <SEO
        title="Contact | MAUNN"
        description="Contactez-nous. Nous sommes là pour répondre à vos questions et discuter de vos besoins."
        keywords="contact MAUNN, nous joindre, MAUNN Paris, adresse MAUNN"
      />

      {/* Données structurées pour l'organisation */}
      <OrganizationStructuredData
        name="MAUNN"
        url="https://www.maunn.fr"
        logo="/logo_maunn_mono_purple.svg"
        description="MAUNN est l'architecte des grandes transformations des entreprises."
        contactPoint={{
          telephone: "",
          email: "contact-admin@info.maunn.fr",
          contactType: "customer service",
          areaServed: "FR",
        }}
        socialLinks={["https://fr.linkedin.com/company/maunn"]}
      />

      <Element name="contact">
        <main className="mb-48 mt-24">
          <header>
            <div className="relative">
              <img
                className="absolute -z-10 blur-3xl h-128 w-auto right-1/3"
                src={LogoPurple}
                alt="Logo MAUNN décoratif"
              />
            </div>

            <div>
              <div className="max-w-[42rem] relative z-10">
                <h1 className="font-black uppercase text-5xl text-white mb-8 mt-8">
                  Contactez-nous.
                </h1>
                <h2 className="text-white text-opacity-60 text-2xl sm:text-3xl">
                  Nous sommes là pour répondre à vos questions et discuter de
                  vos besoins. N'hésitez pas à nous contacter via les
                  coordonnées ci-dessous :
                </h2>
              </div>
            </div>
          </header>

          <section
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-48"
            aria-label="Informations de contact"
          >
            {contactDetails.map((detail) => (
              <article
                key={detail.icon.toString()}
                className="relative flex items-center space-x-3 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={detail.icon}
                    style={{ color: "#b13978" }}
                    size={iconSize}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-white">
                    {detail.title}
                  </h3>
                  {detail.title === "Email" ? (
                    <a
                      href={`mailto:${detail.content}`}
                      className="text text-opacity-60 text-white mt-4 hover:underline"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <address className="text text-opacity-60 text-white mt-4 not-italic">
                      {detail.content}
                    </address>
                  )}
                </div>
              </article>
            ))}
          </section>
        </main>

        <section className="mx-auto" aria-labelledby="form-heading">
          <div>
            <div>
              <h2 id="form-heading" className="sr-only">
                Formulaire de contact
              </h2>
              <iframe
                title="Formulaire de Contact"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeSGk9xpisbLXgKsbgbg8PVZ5u7Jp0Q81aLWbOk4K6_v5B90g/viewform?usp=sf_link"
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
    content: "128, rue de la boétie, 75008 Paris",
  },
];
