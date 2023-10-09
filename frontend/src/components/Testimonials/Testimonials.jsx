import React from "react";
import { GenericButton, TestimonialCard } from "..";
import ScrollAnimation from "react-animate-on-scroll";

const testimonials = [
  {
    name: "Jane Francis",
    testimonial:
      "Vito Forex helped me level up my trading skills in no less than 2 months.",
    image:
      "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg",
  },
  {
    name: "John Lark",
    testimonial:
      "Vito Forex is unlike any other platform that I have used and would recommend it to any one.",
    image:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
  },
  {
    name: "Knolan Jay",
    testimonial:
      "I struggled with forex trading for 2 years. Vito Forex helped me strategize and do proper market analysis.",
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black my-20 py-10">
      <div className="mx-auto w-[90%]">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center">
          <div className="">
            <h2 className="md:text-4xl text-2xl text-white py-4 font-semibold md:w-[70%]">
              Our customers love what we do.
            </h2>
            <p className="text-gray-200 py-4">
              We have help over 20 traders from 5 nations sofar.
            </p>
            <GenericButton
              text={"Read more success stories"}
              classes={"bg-gradient-to-r from-primary to-secondary text-white"}
            />
          </div>
          <div className="">
            {testimonials.map((testimonial, idx) => (
              <ScrollAnimation animateIn="fadeIn" >
                <TestimonialCard
                  key={idx}
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                  image={testimonial.image}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
