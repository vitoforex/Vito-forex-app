import React from "react";
import { PersonProfile, Gallery } from "../../components";

const page = () => {
  return (
    <main className="flex-grow">
      <header className="about-header relative">
        <div className="flex justify-center items-center h-[100%] w-full">
          <h1 className="text-5xl text-white font-bold ">Our Story</h1>
        </div>
      </header>
      <div className="py-20 mx-auto w-[80%]">
        <div className="text-center">
          <h2 className="text-center text-3xl capitalize custom-underline font-semibold">
            About
          </h2>
        </div>
        <div className="flex justify-centers items-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 pt-10 items-center">
            <div className="flex justify-center">
              <PersonProfile />
            </div>
            <div className="lg:col-span-2">
              <p className="">
                Hi, I am David Nsereko, a Ugandan male business man who trades
                forex. I’ve always wanted to be financially free and I quickly
                realized it was impossible to achieve my dream with a regular
                job especially with the current systems in our country. My
                journey into the financial markets started in 2021, i was
                challenged by a colleague who later introduced me to forex
                trading. Since then, my career in forex trading has been a
                reality that would help me achieve my long term freedom.
                However, being successful is not something to achieve overnight,
                this journey( i can say) has consumed most of my time, with
                dedication and commitment to constant learning. I’ve used the
                knowledge acquired over this period of time to come up with a
                trading guide that has helped a number of traders start their
                careers, this has been possible with the Vito Forex Academy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*<Gallery />*/}
    </main>
  );
};

export default page;
