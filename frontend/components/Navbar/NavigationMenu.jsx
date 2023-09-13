import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
            href="/about"
          >
            About us
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            href="/#how-it-works"
          >
            Courses
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            href="#"
          >
            Signals
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            href="#"
          >
            Contact
          </Link>
        </li>
        <li className="my-8 text-3xl text-white font-bold">
          <Link
            className="transition-all duration-200 ease-in-out hover:text-primary"
            onClick={() => setOpen(false)}
            href="#"
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;