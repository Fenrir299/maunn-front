import React from "react";
import TimelineItem from "./props/TimelineItem";

const timelineData = [
  {
    title: "Idéation du projet",
    date: "Janvier 2022",
    description: "Description de l'idéation du projet",
  },
  {
    title: "Création du projet",
    date: "Novembre 2022",
    description: "Validation de l'idée, formation du groupe.",
  },
  {
    title: "Développement",
    date: "Janvier 2023",
    description: "Après un Mockup, l'objectif est d'obtenir une Alpha",
  },
  {
    title: "Professionnalisation",
    date: "Avril 2023",
    description:
      "Différentes phases de sprints se succèdent. Le projet devient suffisamment mur pour être ouvert aux partenariats",
  },
  {
    title: "Epitech Experience",
    date: "Mars 2024",
    description:
      "Camille concourt pour le titre de meilleur projet à l'Epitech Exp présenté par Epitech.",
  },
  {
    title: "Lancement Officiel",
    date: "Courant 2024",
    description:
      "Projet d'avenir, Camille à la vocation de devenir un projet entreprenarial.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="">
      <div className="py-12 px-8  rounded-3xl text-white bg-gradient-to-br dark:from-red-camille dark:to-yellow-camille from-clear-header to-header">
        <ul className="list-none space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
