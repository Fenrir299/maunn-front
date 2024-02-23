import React from "react";
import KeyItem from "./props/KeyItem";

const keyData = [
  {
    title: "Mockup",
    description: "Création d'une maquette, d'une image de marque.",
  },
  {
    title: "Alpha",
    description: "Premières fonctionnalités, recherches d'améliorations.",
  },
  {
    title: "Forward",
    description: "Renforcement des acquis. Nouvelles fonctionnalités.",
  },
  {
    title: "Beta",
    description:
      "Application stable et ouverte à une phase de test avec un public restreint.",
  },
  {
    title: "Growth",
    description:
      "Grossir l'application ! Passage par l'ajout de nouvelles fonctionnalités",
  },
  {
    title: "Version de lancement",
    description:
      "Application stable et fonctionnelle, prête pour le grand public",
  },
];
const Timekey: React.FC = () => {
  return (
    <section className="py-12 px-8 rounded-3xl text-white bg-gradient-to-br dark:from-purple-camille dark:to-clear-blue from-clear-modred to-purple-camille">
      <ul className="list-none space-y-8">
        {keyData.map((item, index) => (
          <KeyItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Timekey;
