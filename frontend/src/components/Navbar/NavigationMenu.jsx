import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = ({ open, setOpen }) => {
  const closedStyles = {
    clipPath: "circle(100px at 90% -100%)",
    WebkitClipPath: "circle(100px at 90% -100%)",
  };

  const openedStyles = {
    clipPath: "circle(2000px at 90% -10%)",
    WebkitClipPath: "circle(2000px at 90% -10%)",
  };

  return (
    <div
      style={open ? { ...openedStyles } : { ...closedStyles }}
      className={` transition-all ease-in-out duration-[2s] flex justify-center items-center z-50 fixed h-[100vh] bg-[#000] w-[100%] top-0 left-0`}
    >
      <ul className="text-center">
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            onClick={() => setOpen(false)}
            className="transition-all duration-200 ease-in-out hover:text-primary"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            onClick={() => setOpen(false)}
            className="transition-all duration-200 ease-in-out hover:text-primary"
            to="/about"
          >
            About us
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            to="/courses"
          >
            Courses
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            to="/signals"
          >
            Signals
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            to="/mentorship"
          >
            Mentorship
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
