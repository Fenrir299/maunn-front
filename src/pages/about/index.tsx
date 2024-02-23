import React from "react";
import Header from "./Header";
import Chrono from "./Chrono";
import TeamPresentation from "./TeamPresentation";
import Team from "./Team";

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background overflow-x-hidden w-full">
      <Header />
      <Chrono />
      <TeamPresentation />
      <Team />
    </div>
  );
};
export default About;
