import GratitudeSvg from "../../assets/other/pray.png";

const Gratitude: React.FC = () => {
  return (
    <div className="flex flex-row sm:w-widget h-20 sm:h-24 w-64 bg-white-header dark:bg-yellow-camille rounded-2xl ">
      <img className="p-4 block  w-auto" src={GratitudeSvg} alt="cGratitude" />
      <div className="py-6  text-left">
        <h4 className="text-sm font-bold">{"Pratiquez la gratitude"}</h4>
        <p className="py-2 w-48 font-light text-xs ">{"Méditation 5-7 min"}</p>
      </div>
    </div>
  );
};
export default Gratitude;
