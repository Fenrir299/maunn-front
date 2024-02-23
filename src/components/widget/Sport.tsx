import SportSvg from "../../assets/camille/camille-sport.svg";

const Sport: React.FC = () => {
  return (
    <div className="relative h-24 w-56  text-xs sm:text-base sm:w-widget sm:h-widget bg-header rounded-2xl ">
      <div className="absolute p-4 text-left">
        <h4 className=" text-white">{"Activité physique"}</h4>
        <p className="py-2 w-32 font-light text-sm  text-white">
          {"Un seul mot d’ordre : marchez, marchez, marchez !"}
        </p>
      </div>
      <img
        className="absolute bottom-0 right-3 block h-20 sm:h-24  w-auto "
        src={SportSvg}
        alt="Sport"
      />
    </div>
  );
};
export default Sport;
