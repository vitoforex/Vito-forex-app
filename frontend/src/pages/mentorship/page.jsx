import React from "react";
import { GenericButton } from "../../components";
import { Link } from "react-router-dom";

const page = () => {
  return (
    <main className="flex-grow">
      <section class="bg-gray-50 ">
        <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="place-self-center mr-auto lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-4xl font-medium leading-none md:text-5xl xl:text-6xl ">
              Unlock Your Forex Trading Potential
            </h1>
            <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Our mentorship provides personalized guidance to our traders and
              enables them to maneuver in the forex market. Are you ready to
              start your forex career, don't hesitate to join our classes now
            </p>
            <Link
              to={"https://selar.co/vito-forex-mentorship"}
              target="_blank"
            >
            <GenericButton
              text={"Start Mentorship"}
              classes={
                " font-bold bg-gradient-to-r from-primary to-secondary text-white mx-2"
              }
              
            />
              
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/22/06/54/computer-3033135_1280.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section class="bg-white ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mb-8 max-w-screen-md lg:mb-16">
            <h2 class="mb-4 text-4xl font-bold text-gray-900 ">
              What we offer.
            </h2>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <h3 class="mb-2 text-xl font-bold ">BEGINNER TRADERS</h3>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ You will learn and understand the introduction to forex
                trading
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Get introduced to the foundational trading guide
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Introduction to basic concepts, market analysis and access to
                to standard signal plan
              </p>
              <Link to={"https://selar.co/vito-forex-basic"} target="_blank">
              <GenericButton
                text={"Get Started"}
                classes={
                  " font-bold bg-gradient-to-r from-primary to-secondary text-white"
                }
              />
              </Link>
            </div>
            <div>
              <h3 class="mb-2 text-xl font-bold ">INTERMEDIATE TRADERS</h3>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Introduction to market analysis and risk management
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Learn and understand your role as a forex trader
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Help you develop a traders mindset
              </p>
              <Link to={"https://selar.co/vito-forex-standard"} target="_blank">
              <GenericButton
                text={"Get Started"}
                classes={
                  " font-bold bg-gradient-to-r from-primary to-secondary text-white"
                }
              />
              </Link>
            </div>
            <div>
              <h3 class="mb-2 text-xl font-bold ">ADVANCED TRADERS</h3>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Introduction to our trading strategy
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Improve on your trading mind
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Specialized and supportive assistance
              </p>
              <p class="text-gray-500 dark:text-gray-400 pb-2">
                ➤ Help you develop your own trading strategy
              </p>
              <Link to={"https://selar.co/vito-forex-premium"} target="_blank">
              <GenericButton
                text={"Get Started"}
                classes={
                  " font-bold bg-gradient-to-r from-primary to-secondary text-white"
                }
              />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 ">
              Get Started with mentorship now!
            </h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Mentoring is about passing on valuable forex trading lessons to
              make you smarter, wiser, and more capable.
            </p>
            <Link
              to={"https://selar.co/vito-forex-mentorship"}
              target="_blank"
            >
            <GenericButton
              text={"Sign Up For Mentorship"}
              classes={
                " font-bold bg-gradient-to-r from-primary to-secondary text-white mx-2"
              }
            />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
