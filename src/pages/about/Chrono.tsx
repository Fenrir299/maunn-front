import React from "react";
import Timeline from "../../components/Timeline";
import Timekey from "../../components/Timekey";
import Camille3D from "../../assets/camille/camille-3d.png";

const Chrono: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-11/12 md:w-2/3 flex flex-col md:flex-row gap-12">
        <Timeline />;
        <div className="relative flex flex-col">
          <img
            style={{
              animation: "astronaut 3s infinite",
              animationTimingFunction: "ease-in-out",
            }}
            className="object-contain h-80 "
            src={Camille3D}
            alt="camille3D"
          />
          <Timekey />;
        </div>
      </div>
    </div>
  );
};
export default Chrono;
