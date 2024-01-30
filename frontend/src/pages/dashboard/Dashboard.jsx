import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import {
  GenericButton,
  Signals,
  TradeBreakdown,
  DailySetups,
  NoPlan,
  ProfileModal,
  Profile,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserIsLoggedIn } from "../../features/authSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [isProfileModalOpen, setProfileIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState("");
  const [currentPlan, setCurrentPlan] = useState("no-plan");
  function updateActiveTab(tabNum) {
    setActiveTab(tabNum);
  }

  useEffect(() => {
    async function getUserStatus() {
      try {
        const response = await axios.get("/auth/user_status");
        if (response.data.email) {
          setName(response.data.first_name);
          setCurrentPlan(response.data.current_plan);
        } else {
          navigate("/login");
          toast("Your session expired, Please login again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch {
        toast("We encountered an error while trying to verify you.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    getUserStatus();
  }, []);

  const logoutHandler = async () => {
    const response = await axios.post("/auth/logout");
    try {
      if (response.status === 200) {
        dispatch(updateUserIsLoggedIn(false));
        localStorage.setItem("isAuthenticated", "false");
        navigate("/");
      }
    } catch {
      toast("We encountered an error while trying to log you out", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  function sideBarHandler() {
    setSideBarOpen((state) => !state);
  }

  const openProfileModal = () => {
    setProfileIsModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <nav className="py-2 px-4 bg-black">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <span className="mr-2">
                <button onClick={() => sideBarHandler()}>
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-white text-xl"
                  />
                </button>
              </span>
              <Link to={"/"}>
                <img src={Logo} width={50} height={50} alt="logo" />
              </Link>
              <div className="pl-2 ">
                <Link to={"/"}>
                  <span className="md:text-3xl text-[16px] font-bold text-white">
                    Vito Forex
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mx-2">
                <span className="font-bold underline underline-offset-1 text-[13px] text-white sm:block hidden">
                  Welcome {name}!
                </span>
              </div>
              <div className="mx-2 sm:block hidden">
                <button
                  onClick={() => openProfileModal()}
                  className="p-2 bg-gray-400 rounded-full active:scale-95 transition-all"
                >
                  <FontAwesomeIcon
                    size="2xl"
                    icon={faUserLarge}
                    style={{ color: "#fff" }}
                  />
                </button>
              </div>
              <div className="ml-2 md:hidden">
                <GenericButton
                  text={"Logout"}
                  classes={"bg-primary text-white rounded-full"}
                  onClick={() => logoutHandler()}
                />
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow bg-[#ddd]">
          <div className="flex ">
            <div
              className={`bg-black h-[90vh] w-44 border-t-2 border-white border-b-2 scrollable transition-all duration-300  ${
                sideBarOpen ? " translate-x-0" : " -translate-x-full hidden"
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="">
                  {currentPlan === "basic" && (
                    <GenericButton
                      text={"Siganals"}
                      classes={
                        "text-white bg-secondary rounded-[0px] py-4 mb-2  w-full"
                      }
                      onClick={() => updateActiveTab(0)}
                    />
                  )}

                  {currentPlan === "standard" && (
                    <>
                      <GenericButton
                        text={"Siganals"}
                        classes={
                          "text-white bg-secondary rounded-[0px] py-4 mb-2  w-full"
                        }
                        onClick={() => updateActiveTab(0)}
                      />
                      <GenericButton
                        text={"Trade Breakdown"}
                        classes={
                          "text-white bg-secondary rounded-[0px] py-4 mb-2  w-full"
                        }
                        onClick={() => updateActiveTab(1)}
                      />
                    </>
                  )}

                  {currentPlan === "premium" && (
                    <>
                      <GenericButton
                        text={"Siganals"}
                        classes={
                          "text-white bg-secondary rounded-[0px] py-4 mb-2  w-full"
                        }
                        onClick={() => updateActiveTab(0)}
                      />
                      <GenericButton
                        text={"Trade Breakdown"}
                        classes={
                          "text-white bg-secondary rounded-[0px] py-4 mb-2  w-full"
                        }
                        onClick={() => updateActiveTab(1)}
                      />
                      <GenericButton
                        text={"Daily setups"}
                        classes={
                          "text-white bg-secondary rounded-[0px] py-4 mb-2  w-full"
                        }
                        onClick={() => updateActiveTab(2)}
                      />
                    </>
                  )}
                </div>

                <div className="py-10">
                  <div className="">
                    <GenericButton
                      text={"Exit"}
                      classes={
                        "text-white bg-secondary rounded-[0px] py-4 mb-2 w-full"
                      }
                      onClick={() => navigate("/")}
                    />
                  </div>
                  <div className="">
                    <GenericButton
                      text={"Logout"}
                      classes={"bg-primary text-white rounded-full w-full"}
                      onClick={() => logoutHandler()}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[100%] md:w-[90%] py-10 pb-20 pl-4 max-h-[90vh] overflow-auto scrollable">
              {currentPlan === "no-plan" ? (
                <NoPlan />
              ) : (
                (activeTab === 0 && <Signals />) ||
                (activeTab === 1 && <TradeBreakdown />) ||
                (activeTab === 2 && <DailySetups />)
              )}
            </div>
          </div>
        </main>
      </div>
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
        <Profile />
      </ProfileModal>
    </>
  );
};

export default Dashboard;
