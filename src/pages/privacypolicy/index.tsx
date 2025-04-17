import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="w-full min-h-screen dark:text-white ">
      <div className="flex flex-col sm:w-1/2 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-noto uppercase dark:text-yellow-camille font-semibold mb-6">
          Politique de confidentialité
        </h1>
        <p>
          Cette politique de confidentialité décrit comment notre structure
          recueille, utilise et protège les informations personnelles que vous
          nous fournissez. En utilisant notre site Web, vous acceptez les termes
          de cette politique de confidentialité.
        </p>

        <h2 className="text-xl  sm:text-2xl font-semibold mt-8 mb-4">
          Collecte d'informations
        </h2>
        <p>
          Nous recueillons des informations personnelles uniquement lorsque vous
          nous contactez. Les informations personnelles peuvent inclure votre
          nom, votre adresse électronique et d'autres informations que vous
          choisissez de fournir.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          Utilisation des informations
        </h2>
        <p>
          Nous utilisons les informations que nous recueillons pour fournir,
          maintenir et améliorer nos services, pour communiquer avec vous et
          pour personnaliser votre expérience.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          Partage des informations
        </h2>
        <p>
          Nous ne vendons, ne louons ni ne partageons vos informations
          personnelles avec des tiers sans votre consentement, sauf si la loi
          l'exige ou pour protéger nos droits et notre propriété.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          Sécurité des informations
        </h2>
        <p>
          Nous prenons des mesures de sécurité appropriées pour protéger vos
          informations personnelles contre l'accès, la divulgation, la
          modification et la destruction non autorisés.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          Modifications de cette politique
        </h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Toute modification sera affichée sur
          cette page, alors n'hésitez pas à la consulter régulièrement.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          Contactez-nous
        </h2>
        <p>
          Si vous avez des questions concernant cette politique de
          confidentialité, n'hésitez pas à nous contacter.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
