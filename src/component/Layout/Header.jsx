import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(false);
  window.onload = function () {
    const primaryHeader = document.getElementById("header");
    const scrollWatcher = document.createElement("div");
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    primaryHeader.before(scrollWatcher);
    const navObserver = new IntersectionObserver((entries) => {
      primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
    });
    navObserver.observe(scrollWatcher);
  };
  // Menu switch
  const switchMenu = () => {
    setMenu(!menu);
  };
  document.addEventListener("click", (e) => {
    if (e.target.id !== "menu" && !e.target.closest("[data-dropdown]")) {
      if (menu) {
        setMenu(!menu);
      }
    }
  });
  // Dark/Light mode switch
  const switchMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <>
      <div
        id="header"
        className="h-24 flex justify-between px-20 items-center select-none sticky top-0 left-0 tb:px-10 sm:px-6  z-20"
      >
        <span className="text-4xl font-bold font-Rubik tb:text-2xl sm:text-xl">
          <NavLink to="/">Lu-Cheng Chiu</NavLink>
        </span>
        <div className="flex justify-evenly w-48 tb:w-32 sm:w-28 relative items-center">
          <div className="relative" data-dropdown>
            <span
              onClick={switchMenu}
              className="self-center uppercase font-Lora font-bold text-2xl cursor-pointer hover:tracking-widest transition-all sm:text-lg"
            >
              {" "}
              <FontAwesomeIcon icon={fas.faBarsStaggered} />{" "}
            </span>
            <div
              id="menu"
              className={`${
                menu ? "opacity-100 translate-y-4" : "opacity-0 translate-y-0"
              } dropdown-menu font-Lora shadow-lg shadow-indigo-300/40 text-xl w-48 tb:text-lg tb:px-5 tb:py-3 tb:w-34 sm:text-sm sm:w-32 sm:py-2`}
            >
              <ul>
                <li className="my-1">
                  <NavLink to="/" className="">
                    home
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink to="about" className="">
                    about
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink to="resume" className="">
                    resume
                  </NavLink>
                </li>{" "}
                <li className="my-1">
                  <NavLink to="sideProjects" className="">
                    side projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <button onClick={switchMode} className="text-2xl w-10 sm:text-lg">
            {darkMode ? (
              <FontAwesomeIcon icon={fas.faSun} />
            ) : (
              <FontAwesomeIcon icon={fas.faMoon} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
