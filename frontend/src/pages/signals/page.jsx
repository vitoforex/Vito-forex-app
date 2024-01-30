import React, { useEffect, useState } from "react";
import axios from "axios";
import { PricingCard } from "../../components";
import {
  defaultPricing,
  basicUpgradePricing,
  standardUpgradePricing,
} from "../../constants/pricing";
import {Spinner} from "../../components";

const Page = () => {
  const [pricing, setPricing] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null)
  const [currentPlanIdx, setCurrentPlanIdx] = useState(null)

  useEffect(() => {
      async function getUserInfo(){
        try {
          const response = await axios.get("/auth/user_status");
          if (response.data.email) {
            if (response.data.current_plan === 'basic'){
              setCurrentPlan('basic')
              setCurrentPlanIdx(0)
              setPricing(basicUpgradePricing)
            }else if (response.data.current_plan === 'standard'){
              setCurrentPlan('standard')
              setCurrentPlanIdx(1)
              setPricing(standardUpgradePricing)
            }else if (response.data.current_plan === 'no-plan'){
              setCurrentPlan('no-plan');
              setCurrentPlanIdx(-2)
              setPricing(defaultPricing); 
            }else{
              // if they are premium users
              setCurrentPlan('premium')
              setCurrentPlanIdx(2)
              setPricing(defaultPricing); 
            }
            
          } else {
            setCurrentPlan('no-plan');
            setCurrentPlanIdx(-2)
            setPricing(defaultPricing); 
          }
        } catch (error) {
          setCurrentPlan('no-plan');
          setCurrentPlanIdx(-2)
          setPricing(defaultPricing); 
        }
      }
      getUserInfo();
    }, 
    []);



  return (
    <main className="flex-grow">
      <div className="mx-auto w-[90%]">
        <div className="text-center">
          <h1 className="custom-underline text-center text-3xl font-semibold pt-20">
            Our Pricing
          </h1>
        </div>
        <div className="py-20">
          <div className="mx-auto w-[90%] flex justify-center items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-28">
              {(pricing && currentPlan )?(pricing.map((option, idx) => (
                <PricingCard
                  title={option.title}
                  price={option.price}
                  months={option.months}
                  features={option.features}
                  restricted={option.restricted}
                  save={option.save}
                  tag={option.tag}
                  original_price={option.original_price}
                  priceId={option.priceId}
                  currentPlan={currentPlan}
                  plan={option.plan}
                  currentPlanIdx={currentPlanIdx}
                  planIdx={idx}
                  purchaseLink={option.purchaseLink}
                />
              ))):<Spinner/>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
