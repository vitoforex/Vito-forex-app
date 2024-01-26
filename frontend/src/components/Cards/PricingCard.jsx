import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";


const PricingCard = ({
  price,
  months,
  title,
  features,
  restricted,
  currentPlan,
  plan,
  planIdx,
  currentPlanIdx,
  purchaseLink,
}) => {
  const [currentText, setCurrentText] = useState("Get Access");

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
            currentPlan === null ? (<a
                href={purchaseLink}
                className="font-bold bg-gradient-to-r from-primary to-secondary text-white py-2 px-8 active:scale-80"
                target="_blank" 
                rel="noreferrer"
              >
                {currentText}
              </a>): (
               ( currentPlan !== plan && planIdx > currentPlanIdx) && (
                <a
                href={purchaseLink}
                className="font-bold bg-gradient-to-r from-primary to-secondary text-white py-2 px-8 active:scale-80"
                target="_blank" 
                rel="noreferrer"
              >
                {currentText}
              </a>
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
