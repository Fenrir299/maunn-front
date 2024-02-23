const TeamPresentation: React.FC = () => {
  return (
    <div className="bg-clear-modpurple dark:bg-darkbg flex flex-col items-center justify-center py-48">
      <h3 className="  py-12 dark:text-yellow-camille text-right font-noto text-2xl sm:text-4xl uppercase">
        {"Rencontrez notre équipe"}
      </h3>
      <p className="dark:text-white text-center md:text-left text-base md:text-lg">
        <h4>
          {"Notre équipe est composée de 8 membres répartis en 5 pôles :"}
        </h4>
        <br />
        <strong>{"Prototypage, Idéation et Design"}</strong>
        {
          " - Chargée de l'UI/UX ainsi que d'idéationner le projet dans sa globalité."
        }
        <br />
        <strong>{"Frontend"}</strong>
        {" - Développement de la partie Front."}
        <br />
        <strong>{"Backend"}</strong>
        {" - Chargée du Développement de la partie Back."}
        <br />
        <strong>{"Intelligence Artificielle"}</strong>
        {" - Au cœur du projet, l'IA est une part importante du développement."}
        <br />
        <strong>{"DevOps"}</strong>
        {" - Chargée de la mise en production et du débogage."}
      </p>
    </div>
  );
};
export default TeamPresentation;
