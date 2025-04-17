import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Header from "./Header";

const Sector: React.FC = () => {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    // Initialiser les événements de défilement
    Events.scrollEvent.register("begin", () => {
      // Gestionnaire d'événement de début de défilement
    });

    Events.scrollEvent.register("end", () => {
      // Gestionnaire d'événement de fin de défilement
    });

    // Mettre à jour le spy de défilement
    scrollSpy.update();

    // Nettoyer les événements à la destruction du composant
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: React.SetStateAction<string>) => {
    setActiveSection(to);
  };

  return (
    <div className="">
      <Header handleSetActive={handleSetActive} />
    </div>
  );
};

export default Sector;
