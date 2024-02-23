import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background overflow-x-hidden w-full">
      <section className="h-mockup flex items-center justify-center flex-col">
        <h1
          className="text-2xl sm:text-3xl font-noto uppercase
         dark:text-yellow-camille"
        >
          {"404 - Page non trouvée"}
        </h1>
        <p className="dark:text-white">
          {" Désolé, la page que vous cherchez n'existe pas ou a été déplacée."}
        </p>
      </section>
    </div>
  );
};

export default NotFound;
