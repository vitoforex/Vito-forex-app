import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Provider from "react-redux";
import { store } from "../../store/store";
import axios from "axios";
import Loader from "../../assets/images/loaders/btn_loader.gif";

const PricingCard = ({
  price,
  months,
  title,
  features,
  restricted,
  save,
  tag,
  original_price,
  priceId,
  currentPlan,
  plan,
  planIdx,
  currentPlanIdx,
}) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("Buy Now");

  async function Checkout() {
    console.log("clicking", isLoggedIn);
    if (isLoggedIn === false) {
      return navigate("/login");
    } else {
      setCurrentText(Loader);
      let data = {
        price: priceId,
      };
      const response = await axios.post(
        "/payment/checkout",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        let redirect_checkout_url = response.data.url;
        window.location.replace(redirect_checkout_url);
      }
    }
  }

  return (
    <div className="w-80 shadow-xl  rounded-lg">
      {currentPlan === plan && (
        <div className="bg-primary w-full h-10 mb-10 flex justify-center items-center">
          <span className="text-white font-bold text-xl">Current Plan</span>
        </div>
      )}
      <div className="px-10 pb-10">
        <div className="">
          <h2 className="uppercase text-lg text-center font-semibold">
            {title}
          </h2>
          <h3 className="capitalize text-center font-light py-4">{tag}</h3>
          <div className="flex justify-center items-center pt-4">
            <div className="mr-2 line-through">${original_price}</div>
            <div className="ml-2 bg-primary py-2 px-4 rounded-full ">
              <span className="text-white">SAVE {save}%</span>
            </div>
          </div>
          <div className="flex justify-center items-center pt-8 pb-4">
            <h2 className="text-black">
              <span className="text-[16px]">$ </span>
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-[16px]">
                /{months} {months > 1 ? "months" : "month"}
              </span>
            </h2>
          </div>
          <div className="py-4 flex justify-center items-center">
          {
            currentPlan === null ? (<button
                onClick={Checkout}
                className="font-bold bg-gradient-to-r from-primary to-secondary text-white py-2 px-8 active:scale-80"
              >
                {currentText.length < 10 ? (
                  currentText
                ) : (
                  <img src={currentText} alt="loader" height={5} width={25} />
                )}
              </button>): (
               ( currentPlan !== plan && planIdx > currentPlanIdx) && (
                <button
                onClick={Checkout}
                className="font-bold bg-gradient-to-r from-primary to-secondary text-white py-2 px-8 active:scale-80"
              >
                {currentText.length < 10 ? (
                  currentText
                ) : (
                  <img src={currentText} alt="loader" height={5} width={25} />
                )}
              </button>
               )
              )
          }
            
          </div>
          <div className="h-[1px] w-full bg-gray-400"></div>
        </div>
        <div className="">
          <h1 className="font-semibold text-2xl py-4">Top Features</h1>
          <div className="flex flex-col">
            {features.map((item, idx) => (
              <div className="flex items-center py-2" key={idx}>
                <div className="">
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    size="xl"
                    className="text-primary"
                  />
                </div>
                <div className="ml-2">
                  <span className="text-[13px]">{item}</span>
                </div>
              </div>
            ))}
            {restricted.map((item, idx) => (
              <div className="flex items-center py-2" key={idx}>
                <div className="">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size="xl"
                    className="text-gray-300"
                  />
                </div>
                <div className="ml-2">
                  <span className="text-[13px]">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
