import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Header from "./Header";
import Body from "./Body";
import PartnersSection from "./PartnerSection";

const Partners: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

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
      <Body />
      <PartnersSection />
    </div>
  );
};
export default Partners;
