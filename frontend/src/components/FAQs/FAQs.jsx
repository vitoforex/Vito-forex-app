import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto w-[90%]">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <ScrollAnimation animateIn="fadeIn">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>

                <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  Any Questions? Look Here
                </h1>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <ScrollAnimation animateIn="fadeIn">
              <AccordionItem
                header="What is Vito Forex and what services do you offer?
              "
                text="Vito Forex is a premier forex trading platform that provides a comprehensive suite of services. We offer access to cutting-edge trading tools, educational resources, and a vibrant community. Our flagship service includes real-time forex signals, guiding traders through the intricate market landscape."
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <AccordionItem
                header=" How can I benefit from Vito Forex's forex signals?
              "
                text="Our forex signals are meticulously crafted by experienced analysts, offering invaluable insights into currency movements. By following these signals, you can make informed trading decisions, potentially maximizing your profits and minimizing risks."
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <AccordionItem
                header=" Is Vito Forex suitable for beginners?"
                text="Absolutely. Vito Forex caters to traders of all levels. Our educational resources provide beginners with a solid foundation, while advanced tools offer seasoned traders the edge they need to succeed."
              />
            </ScrollAnimation>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <ScrollAnimation animateIn="fadeIn">
              <AccordionItem
                header="Are there any community features on Vito Forex?"
                text="Yes, our platform thrives on community collaboration. Join our forums, engage in discussions, and share insights with fellow traders. The sense of community empowers you to learn, grow, and stay updated on market trends."
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <AccordionItem
                header=" How do you ensure accuracy of your forex signals?"
                text="We have a dedicated team of expert analysts who utilize sophisticated algorithms and real-time data analysis to create our signals. This rigorous approach ensures that the signals provided are accurate and reliable."
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <AccordionItem
                header="Can I access Vito Forex on mobile devices?"
                text="Absolutely, we understand the importance of accessibility. Vito Forex offers a mobile-responsive platform that allows you to access our services on your smartphone or tablet, ensuring you stay connected and informed even while on the go."
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    setActive(!active);
  };
  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8 shadow-lg">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] transition-all  duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
      </div>
    </div>
  );
};
