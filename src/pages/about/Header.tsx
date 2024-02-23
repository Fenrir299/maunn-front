import React from "react";

const camille3DAnimation = `
@keyframes astronaut {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-20px) translateX(-10px) rotate(-5deg) scale(1.02);
  }
  75% {
    transform: translateY(60px) translateX(10px) rotate(2deg) scale(1.02);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
  }
}
`;

const Header: React.FC = () => {
  return (
    <section className=" bg-gradient-to-b from-clear-modyellow to-clear-modyellow dark:from-header dark:to-clear-blue h-mockupxxs">
      <style>{camille3DAnimation}</style>
      <div className=" flex justify-center h-full items-end text-center md:text-left  ">
        <div className="w-11/12 md:w-2/3 ">
          <h1 className="md:text-5xl text-3xl  dark:text-yellow-camille font-noto uppercase pb-12">
            {"Découvrez la"}
            <br />
            {" naissance du"}
            <br />
            {" projet"}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Header;
