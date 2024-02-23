import React from "react";
import Header from "./Header";
import ProBackground from "../../assets/pro-background.png";

const Description: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-32 pt-8">
      <div className="w-full flex items-start flex-col py-16">
        <h5 className="text-2xl md:text-4xl font-noto text-pink-400 pb-6">
          RESSOURCES EXCLUSIVES
        </h5>
        <p className="text-sm md:text-base text-black dark:text-white">
          {"Soyez les premiers à accéder aux nouvelles fonctionnalités "}
          <br className="hidden md:flex" />
          {"de Camille. Les utilisateurs pro bénéficient d’un des "}
          <br className="hidden md:flex" />
          {"dernières nouveautés avant tout le monde !"}
        </p>
      </div>
      <div className="w-full flex items-end flex-col py-8">
        <h5 className="text-2xl md:text-4xl text-right font-noto text-pink-400 pb-6">
          CONNECTIVITES ET INTEGRATIONS
        </h5>
        <p className="text-sm md:text-base text-black dark:text-white text-right">
          {
            "API pour les RH: Une API qui peut être intégrée aux systèmes RH existants"
          }
          <br className="hidden md:flex" />
          {
            " pour une meilleure cohérence et un suivi. Intégration avec les systèmes de"
          }
          <br className="hidden md:flex" />
          {
            " communication d'entreprise: Avoir Camille comme un bot dans des outilstels"
          }
          <br className="hidden md:flex" />
          {
            " que Slack ou Microsoft Teams pour envoyer des rappels ou des astuces de bien"
          }
          <br className="hidden md:flex" />

          {"-être."}
        </p>
      </div>
      <div className="w-full flex items-start flex-col py-8">
        <h5 className="text-2xl md:text-4xl font-noto text-pink-400 pb-6">
          {"PROGRAMMES D’ENGAGEMENT"}
        </h5>
        <div className="flex flex-col gap-6">
          <p className="text-sm md:text-base text-black dark:text-white">
            {
              "Challenges bien-être Incitez les équipes à participer à des défis mensuels centrés "
            }
            <br className="hidden md:flex" />
            {
              "sur la santé mentale pour renforcer la camaraderie et l'engagement."
            }
          </p>
          <p className="text-sm md:text-base text-black dark:text-white">
            {
              "Événements de sensibilisation Intégration avec le calendrier de l'entreprise pour "
            }
            <br className="hidden md:flex" />
            {
              "organiser des webinaires, des ateliers, et des événements de sensibilisation à la "
            }
            <br className="hidden md:flex" />
            {"santé mentale."}
          </p>
        </div>
      </div>
      <div className="w-full flex items-end flex-col py-8">
        <h5 className="text-2xl md:text-4xl text-right font-noto text-pink-400 pb-6">
          {"FORMATION ET SENSIBILISATION"}
        </h5>
        <div className="flex flex-col gap-6">
          <p className="text-sm md:text-base text-black dark:text-white text-right">
            {
              "Modules d'éducation Proposez des modules éducatifs pour aider les managers et"
            }
            <br className="hidden md:flex" />
            {" collègues à reconnaître les signes de la dépression."}
          </p>
          <p className="text-sm md:text-base text-black dark:text-white text-right">
            {
              "Ressources pour les managers Conseils et pratiques pour soutenir les employés en"
            }
            <br className="hidden md:flex" />
            {" difficulté."}
          </p>
        </div>
      </div>
      <div className="w-full flex items-center flex-col py-8 pt-48">
        <h5 className="text-2xl md:text-4xl text-center font-noto text-pink-400 pb-10">
          TABLEAU DE BORD ADMINISTRATIF
        </h5>
        <p className="text-sm md:text-base text-black dark:text-white text-center">
          {
            "Statistiques globales Vue d'ensemble des tendances de l'humeur, des symptômes, et des"
          }
          <br className="hidden md:flex" />
          {" niveaux d'engagement des employés sans violer la confidentialité."}
        </p>
      </div>
      <div className="w-full flex justify-center pb-8">
        <img
          src={ProBackground}
          alt="The pro"
          className="w-full md:w-3/4 block object-cover z-10"
        />
      </div>
    </div>
  );
};

const Pro: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background overflow-x-hidden w-full">
      <Header />
      <Description />
    </div>
  );
};
export default Pro;
