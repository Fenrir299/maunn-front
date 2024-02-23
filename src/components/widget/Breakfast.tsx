const Breakfast: React.FC = () => {
  return (
    <div className=" w-56 sm:w-widget h-14 sm:h-16 bg-clear-modred dark:bg-red-camille rounded-2xl up-shadow ">
      <div className="py-1 sm:py-2 px-2  text-left">
        <h4 className=" text-white">{"Petit déjeuner"}</h4>
        <p className=" w-32 font-light text-xs sm:text-sm  text-white">
          {"700 à 1000 Kcal"}
        </p>
      </div>
    </div>
  );
};
export default Breakfast;
