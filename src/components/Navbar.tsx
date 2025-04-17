import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logos/logo_maunn_mono_purple.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Présentation", href: "/" },
  { name: "Secteurs d'activités", href: "/Sectors" },
  { name: "Contact", href: "/Contact" },
  { name: "Carrières", href: "/Career" },
  { name: "Entreprises", href: "/Partners" },
];

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const initialTheme = localStorage.getItem("theme") || "dark";
    setTheme(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <Disclosure
      as="nav"
      className="container text-tierce z-10 flex items-center w-full h-[90px] top-0 relative"
    >
      {({ open, close }) => (
        <>
          <div className="">
            <div className="w-full flex justify-center h-16">
              <div className="flex items-center md:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800
                   dark:text-white hover:bg-secondary hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset
                    focus:ring-white"
                  aria-label="Menu"
                >
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden text-xs md:text-sm lg:text-base md:flex md:items-center md:space-x-4">
                <Link className="top-10" to={"/"} aria-label="Accueil MAUNN">
                  <img
                    className="block h-6 w-auto lg:hidden"
                    src={Logo}
                    alt="logo maunn"
                  />
                  <div className="hidden lg:flex lg:flex-row items-center">
                    <img className="h-8 w-auto" src={Logo} alt="logo maunn" />
                    <h1 className="text-white hover:text-secondary font-black gap-x-2 text-2xl mr-4 ml-2 transition-colors current">
                      MAUNN
                    </h1>
                  </div>
                </Link>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md font-bold hover:underline ${
                      location.pathname === item.href && "text-secondary"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    close();
                  }}
                  className={`block rounded-2xl text-xl font-medium p-4 ${
                    location.pathname === item.href && "dark:text-tierce"
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
