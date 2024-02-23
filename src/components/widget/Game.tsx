import GameSvg from "../../assets/camille/camille_play.png";

const Game: React.FC = () => {
  return (
    <div className="relative h-24 w-56  text-xs sm:text-base sm:w-widget sm:h-widget bg-header rounded-2xl ">
      <div className="absolute p-4 text-left">
        <h4 className=" text-white">{"Jeu de détente"}</h4>
        <p className="py-2 w-24 font-light sm:text-sm  text-white">
          {"Restez actif et évitez les ruminations"}
        </p>
      </div>
      <img
        className="absolute bottom-0 right-3 block h-16 sm:h-24  w-auto "
        src={GameSvg}
        alt="game"
      />
    </div>
  );
};
export default Game;
