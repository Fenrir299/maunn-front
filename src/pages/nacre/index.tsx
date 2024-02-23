import React from "react";
import Header from "./Header";
import TabNacre from "./TabNacre";

const CardNacre: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row relative pb-32">
      <div className="bg-white-header dark:bg-header absolute h-28 w-full z-0" />
      <div className="p-2 px-4 md:px-16 w-full z-10 h-full flex">
        <div className="w-full bg-yellow-50  rounded-3xl p-4 md:p-8">
          <div className="w-full pb-6">
            <p className="text-5xl dark:text-black font-noto uppercase italic">
              Nacre
            </p>
            <div className="flex flex-col p-8 gap-2 font-semibold">
              <p>Personnalisez Camille</p>
              <p>Exportez vos données vers votre practicien</p>
              <p>Obtenez des fonctionnalités exclusives</p>
            </div>
          </div>
          <div className="px-2 md:px-12">
            <div className="bg-blue-400 rounded-3xl text-center">
              <p className="text-2xl dark:text-white font-noto uppercase w-auto p-6">
                S’ABONNER
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 px-4 md:px-16 w-full z-10 h-full flex">
        <div className="w-full bg-green-300  rounded-3xl p-4 md:p-8">
          <div className="w-full pb-6">
            <p className="text-5xl dark:text-black font-noto uppercase italic">
              Nacre+
            </p>
            <div className="flex flex-col p-8 gap-2 font-semibold">
              <p>Accès à NACRE</p>
              <p>Intelligence Artificielle acrue</p>
              <p>Connections avec des partenaire</p>
              <p>Accès à des API complexes</p>
            </div>
          </div>
          <div className="px-2 md:px-12">
            <div className="bg-white rounded-3xl text-center">
              <p className="text-2xl dark:text-black font-noto uppercase w-auto p-6">
                S’ABONNER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nacre: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background overflow-x-hidden w-full">
      <Header />
      <CardNacre />
      <TabNacre />
    </div>
  );
};
export default Nacre;
