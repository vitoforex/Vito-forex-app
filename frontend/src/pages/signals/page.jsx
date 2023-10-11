import React from "react";
import { PricingCard } from "../../components";

const pricing = [
  {
    title: "Basic fxb signals",
    price: "29.99",
    original_price: "69.99",
    tag: "Good for begineers",
    save: "80",
    months: "1",
    priceId:"price_1NnLT7COWoAHqo4Jee4RuX6q",
    features: [
      "Daily Signals",
      "85% win-rateof currecy pairs",
      "Calculated and managed risk",
    ],
    restricted: ["Trade Breakdown", " Daily setups"],
  },
  {
    title: "Standard fxb signals",
    price: "79.99",
    original_price: "119.99",
    tag: "Good for Intermediates",
    save: "78",
    months: "3",
    priceId:"price_1NnLUhCOWoAHqo4JwvUbYWAR",
    features: [
      "Daily Signals",
      "85% win-rateof currecy pairs",
      "Calculated and managed risk",
      "Trade Breakdown",
    ],
    restricted: [" Daily setups"],
  },
  {
    title: "Premium fxb signals",
    original_price: "269.99",
    price: "149.99",
    tag: "Good for Experts",
    save: "85",
    months: "6",
    priceId:"price_1NnLVzCOWoAHqo4JxQvj4wMF",
    features: [
      "Daily Signals",
      "85% win-rateof currecy pairs",
      "Calculated and managed risk",
      "Trade Breakdown",
      " Daily setups",
    ],
    restricted: [],
  },
];

const page = () => {
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
              {pricing.map((option, idx) => (
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
