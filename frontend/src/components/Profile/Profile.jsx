import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { GenericButton, Spinner } from "..";
import { useNavigate } from "react-router";
import axios from "axios";

const Profile = () => {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserStatus() {
      try {
        const response = await axios.get("/auth/user_status");
        if (response.data.email) {
          console.log(response);
          setFullName(response.data.username);
          setCurrentPlan(response.data.current_plan);
          setEmail(response.data.email);
        } else {
          navigate("/login");
          // make a toast tell a user their session expired
        }
      } catch {
        console.log("Unexpected error has occured");
      }
    }
    getUserStatus();
  }, []);

  return (
    <>
      <section className=" bg-blueGray-50">
        <div className="w-full  px-4 mx-auto">
          {email && currentPlan && fullName ? (
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faUserLarge}
                        className="shadow-xl rounded-full text-gray-500 bg-gray-200 p-4 align-middle text-6xl absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {fullName}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {email}
                  </div>

                  <div className="text-center py-10">
                    <h2 className="font-bold text-xl text-center">
                      Current Plan
                    </h2>
                    <p className="capitalize">{currentPlan}</p>
                  </div>
                </div>

                {currentPlan.toLowerCase() !== "premium" && (
                  <div className="text-center py-5">
                    <h2 className="font-bold text-xl text-center pb-4">
                      Upgrade
                    </h2>
                    <GenericButton
                      text={"Upgrade your Plan"}
                      classes={
                        "text-white bg-secondary rounded-[0px] py-4 mb-2"
                      }
                      onClick={() => navigate("/signals")}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
