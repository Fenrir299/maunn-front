import React from "react";
import AirbusLogo from "../../assets/partners/Airbus.png";
import AventisLogo from "../../assets/partners/aventis.png";
import DassaultLogo from "../../assets/partners/dassaultsystems.png";
import MerckLogo from "../../assets/partners/merck.png";
import PfizerLogo from "../../assets/partners/Pfizer.png";

const PartnersSection: React.FC = () => {
  return (
    <div className="p-12 rounded-3xl  ">
      <div className="grid grid-cols-2 md:grid-cols-3   xl:grid-cols-5 gap-4 justify-items-center">
        <PartnerLogo logo={AirbusLogo} name="Airbus" />
        <PartnerLogo logo={AventisLogo} name="Aventis" />
        <PartnerLogo logo={DassaultLogo} name="Dassault Systems" />
        <PartnerLogo logo={MerckLogo} name="Merck" />
        <PartnerLogo logo={PfizerLogo} name="Pfizer" />
        {/* Ajoute d'autres logos ici */}
      </div>
    </div>
  );
};

interface PartnerLogoProps {
  logo: string;
  name: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ logo, name }) => {
  return (
    <div className="flex justify-between bg-white shadow-secondary/50 shadow-xl rounded-lg  p-4 border-secondary border-4 items-center  ">
      <img
        src={logo}
        alt={`Logo ${name}`}
        className="max-h-16 max-w-32 items-center flex justify-center "
      />
    </div>
  );
};

export default PartnersSection;
