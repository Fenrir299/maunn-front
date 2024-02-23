import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logos/logo_maunn_mono_purple.svg";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Présentation", href: "/" },
  { name: "Sécteurs d'activités", href: "/About" },
  { name: "Contact", href: "/Island" },
  { name: "Carrières", href: "/Blog" },
  { name: "Entreprises", href: "/Nacre" },
];

const Navbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      className="container text-tierce z-10  flex items-center w-full h-[90px]  top-0 relative"
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
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w 6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden text-xs md:text-sm lg:text-base md:flex md:items-center md:space-x-4">
                <Link className="top-10" to={"/"}>
                  <img
                    className="block h-6 w-auto lg:hidden"
                    src={Logo}
                    alt="camille"
                  />
                  <div className="hidden lg:flex lg:flex-row items-center">
                    <img className="h-8 w-auto" src={Logo} alt="maunn" />
                    <h1 className="text-white hover:text-secondary font-black gap-x-2 text-2xl mr-4 ml-2 transition-colors current">
                      MAUNN
                    </h1>
                  </div>
                </Link>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md  font-bold  hover:underline ${
                      location.pathname === item.href && " dark:text-tierce"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <button
                className="absolute top-10 right-5 lg:right-10 lg:top-8 rounded-full dark:text-white"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? (
                  <MoonIcon className="h-8 w-8 hover:text-secondary animate-bounce" />
                ) : (
                  <SunIcon className="h-8 w-8 hover:text-secondary animate-bounce" />
                )}
              </button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    close();
                    console.log("yo le rap");
                  }}
                  className={`block rounded-2xl text-xl font-medium p-4 ${
                    location.pathname === item.href && " dark:text-tierce"
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
