import React from "react";
import TeamMember from "../../components/props/TeamMember";
import Louis from "../../assets/team/louis.jpg";
import Thomas from "../../assets/team/thomas.jpg";
import Tom from "../../assets/team/tom.png";
import Delesan from "../../assets/team/delesan.png";
import Lucas from "../../assets/team/lucas.png";
import Jade from "../../assets/team/jade.jpg";
import Alan from "../../assets/team/alan.png";
import Theodore from "../../assets/team/theodore.png";

const teamData = [
  {
    name: "Louis Giguet",
    role: "Chef de Projet",
    email: "louis.giguet@epitech.eu",
    photo: Louis,
    description:
      "Louis est un chef de projet expérimenté dans le domaine des technologies de l'information.",

    imagePosition: "left",
    linkedin: "https://www.linkedin.com/in/louisgiguet",
  },
  {
    name: "Thomas Tricaud",
    role: "Responsable Frontend",
    email: "thomas.tricaud1@epitech.eu",
    photo: Thomas,
    description:
      "Thomas est aussi responsable fonctionnel, il organise les réunions Scrum notamment.",
    linkedin: "https://www.linkedin.com/in/thomas-tricaud/",
    github: "https://github.com/Thomastrcd",
  },
  {
    name: "Tom Rives",
    role: "Responsable Backend",
    email: "tom.rives@epitech.eu",
    photo: Tom,
    description: "Sans doute le plus tek des tekos. Expert en tout.",

    imagePosition: "left",
    linkedin: "https://www.linkedin.com/in/tom-rives-b034951a0",
    github: "https://github.com/BliTz037",
  },
  {
    name: "Delesan Srineevasan",
    role: "Développeur BackEnd",
    email: "delesan.srineevasan@epitech.eu",
    photo: Delesan,
    description: "Son super pouvoir : Ne jamais dire non ! Délésan exécute.",
    linkedin: "https://www.linkedin.com/in/delesan/",
    github: "https://github.com/Delesan",
  },
  {
    name: "Lucas Moritel",
    role: "Développeur Backend",
    email: "lucas.moritel@epitech.eu",
    photo: Lucas,
    description:
      "Parti en Irlande, Lucas regrette son départ à Dublin plutôt que Saint-Petersbourg.",
    imagePosition: "left",
    linkedin: "https://www.linkedin.com/in/lucas-moritel-b40aa0176/",
    github: "https://github.com/MoritelLucas",
  },
  {
    name: "Jade Monfray",
    role: "Développeur Frontend",
    email: "jade.monfray@epitech.eu",
    photo: Jade,
    description: "Jade est une experte, et elle aura toujours raison.",
    linkedin: "https://www.linkedin.com/in/jade-monfray/",
    github: "https://github.com/jademonfray",
  },
  {
    name: "Alan Sigal",
    role: "Responsable IA",
    email: "alan.sigal@epitech.eu",
    photo: Alan,
    description:
      "Alan à l'esprit de compétition, ce qui l'oblige à viser l'excellence.",
    linkedin: "https://fr.linkedin.com/in/alan-sigal-2202021a2",
    github: "https://github.com/Kirlivai",
  },
  {
    name: "Théodore Gozard",
    role: "Responsable DevOps",
    email: "theodore.gozard@epitech.eu",
    photo: Theodore,
    description:
      "Il n y a que les barbus et les fous qui aiment le DevOps. Ca tombe bien, il est au moins un des deux.",
    imagePosition: "right",
    linkedin: "https://www.linkedin.com/in/theodore-gozard/",
    github: "https://github.com/TheodoreGozard",
  },
];

const Team: React.FC = () => {
  return (
    <section className="w-full  p-8 sm:p-12 flex justify-center">
      <div
        className="flex flex-col justify-center w-full md:w-3/4 lg:w-1/2 rounded-3xl py-12 px-4 md:px-8 text-white
       bg-gradient-to-tr dark:to-red-camille dark:from-header from-clear-header to-purple-camille"
      >
        <h2 className="font-noto text-2xl uppercase mb-6 text-center">
          Notre équipe
        </h2>
        <ul className="list-none space-y-4">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              email={member.email}
              description={member.description}
              photo={member.photo}
              linkedin={member.linkedin}
              github={member.github}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
