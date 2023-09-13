import React from "react";
import { PersonProfile, Gallery } from "../../../components";

const page = () => {
  return (
    <main className="flex-grow">
      <header className="about-header relative">
        <div className="flex justify-center items-center h-[100%] w-full">
          <h1 className="text-5xl text-white font-bold ">About</h1>
        </div>
      </header>
      <div className="py-20 mx-auto w-[80%]">
        <h2 className="text-center text-3xl capitalize custom-underline font-semibold">
          My Story
        </h2>
        <div className="flex justify-centers items-center">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 pt-10 items-center">
            <div className="">
              <PersonProfile/>
            </div>
            <div className="lg:col-span-2">
              <p className="">
                I am David Nsereko, an avid explorer of the financial realm. My
                journey into the world of forex trading was sparked by a desire
                to unravel the intricacies of global markets. As I delved into
                charts and analyzed trends, I found myself captivated by the ebb
                and flow of currencies. What began as a curious endeavor soon
                transformed into a passionate pursuit. The challenges I
                encountered along the way only fueled my determination to excel.
                Now, armed with valuable insights and hard-earned wisdom, my
                mission is to empower fellow traders. Guided by a burning desire
                to share knowledge, I aspire to help others navigate the dynamic
                landscape of forex trading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Gallery/>
    </main>
  );
};

export default page;
