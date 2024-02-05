import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTiktok,
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const pathname = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();


  useEffect(() => {
    setCurrentPath(pathname.pathname);
  });

  return (
    <>
      {currentPath !== "/dashboard" &&
        currentPath !== "/login" &&
        currentPath !== "/register" &&
        currentPath !== "/dashboardtest" && (
          <footer className="bg-black py-8 self-end bottom-0 static">
            <div className="mx-auto w-[90%]">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white gap-9">
                <div className="flex flex-col sm:items-start items-center">
                  <h2 className="text-white text-2xl font-semibold ">
                    TRADING DISCLAIMER
                  </h2>
                  <p className="text-gray-200 font-light py-4 text-[14px]">
                    Trading foreign exchange on margin carries a high level of
                    risk, and may not be suitable for all investors. Past
                    performance is not indicative of future results.
                  </p>
                </div>
                <div className="flex flex-col sm:items-start items-center">
                  <h2 className="text-white text-2xl font-semibold">CONTACT</h2>
                  <ul className="pt-4">
                    <li>
                      <Link
                        to={"tel:256708659816"}
                        className="underline  underline-offset-2 text-[14px]"
                      >
                        +256708659816
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"mailto:vitoforextrader@gmail.com"}
                        className="underline  underline-offset-2 text-[14px]"
                      >
                        vitoforextrader@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:items-start items-center">
                  <h2 className="text-white text-2xl font-semibold">
                    KEEP IN TOUCH
                  </h2>
                  <div className="flex flex-wrap">
                  <div className="py-2 mr-4">
                      <Link to={"https://wa.me/+256708659816"}>
                        <FontAwesomeIcon
                          size="2xl"
                          icon={faWhatsapp}
                          className="text-primary hover:text-white transition-all"
                        />
                      </Link>
                    </div>
                  {/*
                    <div className="py-2 mr-4">
                      <Link to={"#"}>
                        <FontAwesomeIcon
                          size="2xl"
                          icon={faFacebook}
                          className="text-primary hover:text-white transition-all"
                        />
                      </Link>
                    </div>
                    <div className="py-2 mx-4">
                      <Link to={"#"}>
                        <FontAwesomeIcon
                          size="2xl"
                          icon={faLinkedin}
                          className="text-primary hover:text-white transition-all"
                        />
                      </Link>
                    </div>
                    <div className="py-2 mx-4">
                      <Link to={"#"}>
                        <FontAwesomeIcon
                          size="2xl"
                          icon={faYoutube}
                          className="text-primary hover:text-white transition-all"
                        />
                      </Link>
                    </div>
                    <div className="py-2 mx-4">
                      <Link to={"#"}>
                        <FontAwesomeIcon
                          size="2xl"
                          icon={faInstagram}
                          className="text-primary hover:text-white transition-all"
                        />
                      </Link>
                    </div>
                  */}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="py-4 w-[100%] mx-auto ">
                  <ul className="flex justify-between items-center lg:flex-row flex-col">
                    <li className="py-[3px]">
                      <Link
                        to={"/"}
                        className="text-gray-400  text-1xl hover:text-primary transition-all"
                      >
                        HOME
                      </Link>
                    </li>
                    <li className="py-[3px]">
                      <Link
                        to={"/about"}
                        className="text-gray-400  text-1xl hover:text-primary transition-all"
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li className="py-[3px]">
                      <Link
                        to={"/signals"}
                        className="text-gray-400  text-1xl hover:text-primary transition-all"
                      >
                        SIGNALS
                      </Link>
                    </li>
                    <li className="py-[3px]">
                      <Link
                        to={"/courses"}
                        className="text-gray-400  text-1xl hover:text-primary transition-all"
                      >
                        COURSES
                      </Link>
                    </li>
                    <li className="py-[3px]">
                      <Link
                        to={"/contact"}
                        className="text-gray-400  text-1xl hover:text-primary transition-all"
                      >
                        CONTACT
                      </Link>
                    </li>
                    <li className="py-[3px]">
                      <Link
                        to={"/mentorship"}
                        className="text-gray-400  text-1xl hover:text-primary transition-all"
                      >
                        MENTORSHIP
                      </Link>
                    </li>
                  </ul>
                </div>
                <hr className="w-[100%] " />
              </div>
              <div className="text-center pt-4">
                <span className="text-gray-300">
                  © {currentYear} Vito Forex. All rights reserved.
                </span>
              </div>
            </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
