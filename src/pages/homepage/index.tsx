import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Header from "./Header";
import Tools from "./Tools";
import Activities from "./Disposition";
import Rewards from "./Rewards";
import Ender from "./Ender";
import Alert from "../../components/Alert";
import Disposition from "./Disposition";
import Consulting from "./Consulting";
import Master from "./Master";

const Homepage: React.FC = () => {
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
      <Disposition />
      <Master handleSetActive={handleSetActive} />
      <Consulting />
      <Ender handleSetActive={handleSetActive} />
    </div>
  );
};
export default Homepage;
