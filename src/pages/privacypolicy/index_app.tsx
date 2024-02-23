import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy_App: React.FC = () => {
  return (
    <section className="w-full min-h-screen dark:text-white ">
      <div className="flex flex-col sm:w-1/2 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-noto uppercase dark:text-yellow-camille font-semibold mb-6">
          Politique de confidentialité
        </h1>
        <p>
          Cette politique de confidentialité décrit comment notre structure
          recueille, utilise et protège les informations personnelles que vous
          nous fournissez. En utilisant notre application et nos services, vous
          acceptez les termes de cette politique de confidentialité.
        </p>
        <Link to="/privacy" className="mt-4 text-blue-600 hover:underline">
          Voir la politique de confidentialité du site vitrine
        </Link>
        <h2 className="text-xl  sm:text-2xl font-semibold mt-8 mb-4">
          I. Introduction
        </h2>
        <p>
          Bienvenue sur l'application <strong>Camille</strong>, un projet étudiant dédié à offrir un service innovant tout en respectant votre vie privée. Nous nous engageons à traiter vos données personnelles avec la plus grande attention et conformément aux lois en vigueur, notamment la <em>Loi Informatique et Libertés</em> du 6 janvier 1978 et le <em>Règlement Général sur la Protection des Données (RGPD)</em> de l'Union Européenne.
          <br /><br />
          Nos principes fondamentaux sont :
          <br />
          • Respect de votre contrôle sur vos données personnelles : Vous avez le plein contrôle sur vos données et leur utilisation.
          <br />
          • Transparence, confidentialité et sécurité : Vos données sont traitées de manière transparente, dans le respect de leur confidentialité et avec des mesures de sécurité rigoureuses.
          <br />
          • Non-commercialisation de vos données : Vos informations personnelles ne seront jamais vendues ou louées à des tiers.
          <br /><br />
          En utilisant <strong>Camille</strong>, vous acceptez sans réserve notre Politique de Confidentialité. <strong>Camille</strong> est un projet développé par des étudiants, visant à offrir des solutions innovantes tout en garantissant le respect de votre vie privée.
          <br />
          Cette politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons, partageons et protégeons vos données personnelles.
        </p>
        <h2 className="text-xl  sm:text-2xl font-semibold mt-8 mb-4">
          II. Collecte des données
        </h2>
        <p>
          Nous collectons les types de données suivants :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
          <li><strong>Données d'Identification Personnelle :</strong></li>
          <ul className="list-disc ml-8">
            <li>Nom, prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Date de naissance</li>
            <li>Genre</li>
          </ul>
          <li><strong>Données Techniques :</strong></li>
          <ul className="list-disc ml-8">
            <li>Type de dispositif utilisé</li>
            <li>Système d'exploitation</li>
            <li>Fuseau horaire de l’appareil</li>
            <li>Microphone de l’appareil</li>
            <li>Langue de préférence</li>
            <li>Temps d’utilisation sur les différents widgets de l’application</li>
            <li>Nombre de connexion journalière</li>
          </ul>
          <li><strong>Données de Santé :</strong></li>
          <ul className="list-disc ml-8">
          <li>Antécédents et diagnostic de dépression</li>
          <li>Nom, profession, adresse et adresse e-mail du professionnel de santé</li>
          <li>Diagnostic d’autres troubles de santé mentale</li>
          <li>Fréquence de consommation d’alcool, de tabac, et de substances illicites</li>
          <li>Fréquence de pratique d’activité physique ou sportive</li>
          <li>Fréquence de sociabilité</li>
          <li>Rythme de vie (diurne, nocturne)</li>
          <li>Heures de sommeil</li>
          <li>Fréquence de migraines</li>
          <li>Résultats de test MADRS sur 10 thèmes (Humeur, Sentiment de malaise, etc.)</li>
          <li>Distance marchée en km, nombre de pas</li>
          <li>Aliments ingérés</li>
          <li>Entrées journalières sur le journal</li>
          <li>Émotions de l’utilisateur associées à chaque jour</li>
          </ul>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
          Ces données sont collectées pour fournir et améliorer nos services, communiquer avec vous, et personnaliser votre expérience utilisateur.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            III. Base légale du traitement des données
        </h2>
        <p>
            Nous traitons vos données personnelles sur la base des justifications légales suivantes, conformément au Règlement Général sur la Protection des Données (RGPD) :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
            <li><strong>Consentement :</strong> Nous collectons et traitons vos données avec votre consentement explicite, obtenu lors de votre inscription ou lors de la mise à jour de notre politique de confidentialité.</li>
            <li><strong>Exécution d'un contrat :</strong> Le traitement de vos données est nécessaire pour fournir les services que vous avez demandés ou pour répondre à nos obligations contractuelles envers vous.</li>
            <li><strong>Obligations légales :</strong> Dans certains cas, nous sommes tenus de traiter vos données pour nous conformer à des obligations légales et réglementaires.</li>
            <li><strong>Intérêts légitimes :</strong> Nous pouvons également traiter vos données lorsque cela est nécessaire aux fins des intérêts légitimes poursuivis par notre entreprise, à condition que ces intérêts ne soient pas outrepassés par vos droits et libertés.</li>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
            Nous nous engageons à traiter vos données personnelles de manière transparente et équitable, en respectant toujours vos droits et en conformité avec la législation en vigueur.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          IV. Utilisation des données
        </h2>
        <p>
            Vos données sont utilisées pour :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
        <li>
            <strong>Création et gestion de compte utilisateur</strong>
            <p>Pour vous inscrire et gérer votre compte sur notre application.</p>
        </li>
        <li>
            <strong>Fourniture de services et fonctionnalités</strong>
            <p>Pour vous fournir l'accès à nos services et fonctionnalités.</p>
        </li>
        <li>
            <strong>Amélioration et personnalisation de l'expérience utilisateur</strong>
            <p>Pour comprendre comment nos services sont utilisés et pour les améliorer en conséquence. Pour personnaliser votre expérience selon vos besoins et préférences.</p>
        </li>
        <li>
            <strong>Communication</strong>
            <p>Pour communiquer avec vous, y compris pour le support utilisateur et les mises à jour de services.</p>
        </li>
        <li>
            <strong>Alimentation et amélioration de notre modèle d'intelligence artificielle</strong>
            <p>Pour ajuster et améliorer les recommandations de l'application basées sur vos données individuelles. Pour améliorer continuellement notre modèle d'IA, afin qu'il serve plus efficacement à la recherche médicale et contribue à l'avancement des connaissances dans ce domaine.</p>
        </li>
        <li>
            <strong>Recherche médicale et avancements scientifiques</strong>
            <p>Pour analyser les tendances et les schémas dans les données de santé collectées, contribuant ainsi à la recherche médicale. Pour collaborer avec des institutions de recherche et contribuer à des études scientifiques, toujours dans le respect de votre vie privée et de votre consentement.</p>
        </li>
        </ul>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            V. Partage des données
        </h2>
        <p>
            Nous prenons votre vie privée au sérieux et ne partageons vos données avec des tiers que dans les cas suivants :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
        <li>
            <strong>Prestataires de services</strong>
            <p>Nous collaborons avec des prestataires de services qui traitent les données en notre nom pour des opérations telles que l'hébergement de données, le support client et l'analyse de données.</p>
        </li>
        <li>
            <strong>Conformité légale et protection des droits</strong>
            <p>Vos données peuvent être partagées si nécessaire pour se conformer à une obligation légale, pour protéger nos droits ou pour prévenir la fraude et d'autres activités illégales.</p>
        </li>
        <li>
            <strong>Fusions, acquisitions, ou vente d'actifs</strong>
            <p>En cas de restructuration, fusion, acquisition ou vente d'actifs de l'entreprise, vos données peuvent être transférées dans le cadre de cette transaction.</p>
        </li>
        <li>
            <strong>Recherche médicale avec données anonymisées</strong>
            <p>Pour la recherche médicale, nous pouvons partager des données anonymisées et non liées directement à nos utilisateurs.</p>
        </li>
        <li>
            <strong>Utilisation de services tiers et API externes</strong>
            <p>Nous utilisons certaines API et services tiers pour le traitement des données, qui peuvent nécessiter le partage de certaines informations.</p>
        </li>
        <li>
            <strong>Partenariats stratégiques ou commerciaux</strong>
            <p>Nous pouvons partager des données avec des partenaires stratégiques ou commerciaux dans le cadre de promotions conjointes ou de nouvelles fonctionnalités qui peuvent vous intéresser.</p>
        </li>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
        Nous nous assurons que tous les tiers avec lesquels nous partageons vos données respectent des normes de confidentialité et de sécurité strictes. De plus, nous limitons le partage de vos données au strict nécessaire pour réaliser les objectifs déclarés.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            VI. Stockage et sécurité
        </h2>
        <p>
            La sécurité de vos données est une priorité absolue pour nous. Pour assurer la protection de vos informations personnelles, nous avons mis en place des mesures de sécurité rigoureuses :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
        <li>
            <strong>Protocoles de chiffrement</strong>
            <p>Toutes les données sont cryptées par nos serveurs avant d'être stockées. Le cryptage sert à protéger vos données contre les accès non autorisés.</p>
        </li>
        <li>
            <strong>Politiques de sécurité informatique</strong>
            <p>Nous appliquons des politiques de sécurité strictes pour gérer et sécuriser nos systèmes et données informatiques.</p>
        </li>
        <li>
            <strong>Localisation des serveurs</strong>
            <p>Vos données sont stockées sur des serveurs situés en France, offrant ainsi une conformité avec les réglementations locales et européennes en matière de protection des données.</p>
        </li>
        <li>
            <strong>Durée de conservation</strong>
            <p>Vos données sont conservées aussi longtemps que nécessaire pour les finalités énoncées dans cette politique, ou pour respecter nos obligations légales.</p>
        </li>
        <li>
            <strong>Révision et mise à jour des mesures de sécurité</strong>
            <p>Nous révisons et mettons régulièrement à jour nos mesures de sécurité pour faire face aux nouvelles menaces et challenges en matière de sécurité informatique.</p>
        </li>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
        Nous nous engageons à protéger vos données contre toute perte, utilisation abusive, accès non autorisé, divulgation, altération ou destruction. Toutefois, il est important de noter qu'aucune méthode de transmission ou de stockage électronique n'est totalement sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            VII. Droits de l'utilisateur
        </h2>
        <p>
            En accord avec le Règlement Général sur la Protection des Données (RGPD), vous bénéficiez des droits suivants concernant vos données personnelles :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
        <li>
            <strong>Droit d'accès :</strong>
            <p>Vous avez le droit d'accéder aux données personnelles que nous détenons à votre sujet.</p>
        </li>
        <li>
            <strong>Droit de rectification :</strong>
            <p>Vous pouvez demander la correction de vos données personnelles si elles sont inexactes ou incomplètes.</p>
        </li>
        <li>
            <strong>Droit à l'effacement (« droit à l'oubli ») :</strong>
            <p>Vous pouvez demander la suppression de vos données personnelles dans certaines circonstances.</p>
        </li>
        <li>
            <strong>Droit de limiter le traitement :</strong>
            <p>Vous avez le droit de demander la limitation du traitement de vos données personnelles.</p>
        </li>
        <li>
            <strong>Droit d'opposition :</strong>
            <p>Vous pouvez vous opposer au traitement de vos données personnelles pour des raisons liées à votre situation particulière.</p>
        </li>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
        Pour exercer ces droits, veuillez nous envoyer un e-mail à : camille-eip@outlook.fr. Dans votre e-mail, veuillez préciser :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
        <li>L’adresse e-mail associée à votre compte utilisateur.</li>
        <li>L’action spécifique que vous souhaitez entreprendre concernant vos données (accès, correction, suppression, limitation du traitement, ou opposition au traitement).</li>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>Nous traiterons votre demande conformément à la législation en vigueur et vous répondrons dans les meilleurs délais.</p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            VIII. Modifications de la politique
        </h2>
        <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment pour refléter les changements dans nos pratiques, les exigences légales, ou pour d'autres raisons. Ces modifications sont importantes pour maintenir la sécurité de vos données et assurer la transparence dans la manière dont nous les utilisons.
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
        Lorsque nous apportons des modifications à cette politique, nous vous en informerons par e-mail. Nous vous recommandons de consulter régulièrement cette politique pour être informé de tout changement. Votre utilisation continue de notre application après ces changements signifie que vous acceptez la politique de confidentialité révisée.
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>
        Si les modifications apportées ont un impact significatif sur vos droits ou la manière dont nous utilisons vos données personnelles, nous vous fournirons un préavis plus substantiel ou, lorsque la loi l'exige, nous obtiendrons votre consentement avant d'appliquer ces changements.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            IX. Contact
        </h2>
        <p>
            Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, ou si vous souhaitez obtenir des informations supplémentaires sur le traitement de vos données personnelles, nous vous invitons à nous contacter. Vous pouvez nous joindre de deux manières :
        </p>
        <span style={{ display: 'block', height: '10px' }}></span>
        <ul className="list-disc ml-5">
        <li>
            <strong>Par E-mail :</strong>
            <p>Pour une réponse directe, envoyez-nous un e-mail à <a href="mailto:camille-eip@outlook.fr" className="text-blue-600 hover:underline">camille-eip@outlook.fr</a>. Nous nous efforcerons de répondre à toutes les demandes dans les plus brefs délais.</p>
        </li>
        <li>
            <strong>Via notre Formulaire en Ligne :</strong>
            <p>Pour une approche plus formelle ou pour des demandes spécifiques, veuillez utiliser notre formulaire en ligne accessible à l'adresse suivante : <a href="https://forms.office.com/e/Lc8pbSD9Y3" className="text-blue-600 hover:underline">https://forms.office.com/e/Lc8pbSD9Y3</a>. Ce formulaire est conçu pour garantir que votre demande soit traitée efficacement et de manière sécurisée.</p>
        </li>
        </ul>
        <span style={{ display: 'block', height: '10px' }}></span>
        <p>Nous sommes à votre disposition pour toute question ou demande d'information concernant vos données personnelles et cette politique de confidentialité.</p>

      </div>
    </section>
  );
};

export default PrivacyPolicy_App;
