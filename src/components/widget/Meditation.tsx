import MeditationSvg from "../../assets/camille/camille_meditation.png";

const Meditation: React.FC = () => {
  return (
    <div className="relative h-24 w-56  text-xs sm:text-base sm:w-widget sm:h-widget bg-header rounded-2xl ">
      <div className="absolute p-4 text-left">
        <h4 className=" text-white">{"Méditation"}</h4>
        <p className="py-2 w-24 font-light sm:text-sm  text-white">
          {"Méditations guidées à tout moment"}
        </p>
      </div>
      <img
        className="absolute bottom-0 right-3 block h-16 sm:h-24  w-auto "
        src={MeditationSvg}
        alt="meditation"
      />
    </div>
  );
};
export default Meditation;
