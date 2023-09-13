"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { GenericButton, Hamburger, NavigationMenu } from "../";
import Logo from '../../public/assets/images/logo.jpg'
import { useSelector, useDispatch } from "react-redux";
import { updateUserIsLoggedIn } from "../../features/authSlice";
import axios from "axios";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      dispatch(updateUserIsLoggedIn(true))
    }
  }, []);
  
  const isClient = typeof window !== 'undefined';
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 1024);
  const [open, setOpen] = useState(false);

  const  logoutHandler = async () => {
   const response = await axios.post('/auth/logout')
   if (response.status === 200){
    dispatch(updateUserIsLoggedIn(false));
    localStorage.setItem('isAuthenticated', 'false');
   }
  }

  const handleOpen = () => {
    setOpen((state) => !state);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (isClient) {
      // Add event listener to track window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setOpen(false);
    }
  }, [windowWidth]);

  return (
    <nav className="z-50 bg-black">
      {/* big screens navigation */}
      <div className="mx-auto w-[90%] py-4  ">
        <div className="hidden lg:flex flex-row w-[100%] items-center justify-between ">
          <div className="">
           <Link href={"/"}>
            <img
              src={'/media/logo.jpg'}
              width={50}
              height={50}
              alt="logo"
            />
           </Link>
          </div>
          <div className="items ">
          <ul className="flex flex-row items-center justify-between">
              <li className="mx-4">
                <Link className="text-[18px] text-gray-200  font-semibold  hover:text-primary transition-all hover:underline-offset-2 hover:underline" href={"/about"}>
                  About 
                </Link>
              </li>
              <li className="mx-4">
                <Link className="text-[18px] text-gray-200 font-semibold hover:text-primary transition-all hover:underline-offset-2 hover:underline" href={"/courses"}>
                  Courses
                </Link>
              </li>
              <li className="mx-4">
                <Link className="text-[18px] text-gray-200 font-semibold hover:text-primary transition-all hover:underline-offset-2 hover:underline" href={"/signals"}>
                    Signals
                </Link>
              </li>
              <li className="mx-4">
                <Link className="text-[18px] text-gray-200 font-semibold hover:text-primary transition-all hover:underline-offset-2 hover:underline" href={"/contact"}>
                    Contact
                </Link>
              </li>
              <li className="mx-4">
                <Link className="text-[18px] text-gray-200 font-semibold hover:text-primary transition-all hover:underline-offset-2 hover:underline" href={"/blog"}>
                    Blog
                </Link>
              </li>
              <li className="mx-4">
                <Link className="text-[18px] text-gray-200 font-semibold hover:text-primary transition-all hover:underline-offset-2 hover:underline" href={"/mentorship"}>
                    Mentorship
                </Link>
              </li>
            </ul>
          </div>
          <div className="z-10 hidden lg:flex  ">
          <GenericButton
            text={"Get Started"}
            classes={" font-bold bg-gradient-to-r from-primary to-secondary text-white mx-2"}
          />

          {auth.isLoggedIn && <button onClick={logoutHandler} className="">
            Log out
          </button>}
          
          </div>
        </div>
       
      </div>

      {/* small screens navigation */}
      <div className="lg:hidden ">
        <div className=" flex flex-row mx-auto w-[90%] items-center justify-between pb-4">
          <div className="">
          <Link href={"/"}>
            <img
              src={'/media/logo.jpg'}
              width={50}
              height={50}
              alt="logo"
            />
           </Link>
          </div>
          <div className="flex ">
            <Hamburger
              open={open}
              onClick={()=>handleOpen()}
            />
          
          </div>
        </div>
      </div>

        {/* small screens menu */}
        <NavigationMenu setOpen={setOpen} open={open}/>
    </nav>
  );
};

export default Navbar;