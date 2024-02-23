import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Alert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const showAlert = localStorage.getItem("alertShown") !== "true";

    if (showAlert) {
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const handleJoin = () => {
    setIsVisible(false);
    localStorage.setItem("alertShown", "true");
    setTimeout(() => {
      navigate("/Contact");
    }, 500);
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("alertShown", "true");
  };

  const alertClasses = isVisible
    ? "transform transition duration-500 ease-in-out translate-y-0 opacity-100"
    : "transform transition duration-500 ease-in-out -translate-y-full opacity-0";

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0  w-5/6 md:w-1/2 p-4 z-50 ${alertClasses}`}
    >
      <div
        className="bg-white-header dark:bg-red-camille md:text-base sm:text-sm text-xs text-white
        p-2 sm:p-4 rounded-2xl shadow-lg flex items-center justify-between"
      >
        <div className="text-xxs md:text-base">
          <span className="font-bold">{"Rejoignez l'aventure !"}</span>{" "}
          {"Participez à notre projet et faites parti son développement."}
        </div>
        <div className="flex  flex-row items-center pl-2">
          <button
            className="bg-white md:text-base sm:text-sm text-xs text-clear-modyellow dark:text-red-camille
             font-bold py-1 px-4 rounded-md mr-2"
            onClick={handleJoin}
          >
            GO
          </button>
          <button className="p-1" onClick={handleClose}>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
