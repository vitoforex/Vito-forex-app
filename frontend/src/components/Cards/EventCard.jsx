import React from "react";
import { GenericButton } from "..";
import { Link } from "react-router-dom";

const EventCard = ({image, title, date, venue, link}) => {
  return (
    <div className="w-[80%] bg-[#333] shadow-xl rounded-2xl overflow-hidden my-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="overflow-hidden">
          <img
            src={
              image
            }
            width={300}
            height={300}
            className="h-full w-full"
            alt="title"
          />
        </div>
        <div className="text-white flex flex-col p-6">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-semibold py-2">
              {title}
            </h2>
            <p className="text-lg py-2 text-gray-200">{date}</p>
            <p className="text-lg py-2 text-gray-200">{venue}</p>
          </div>

          <div className="flex py-2">
            <div className="mr-2">
            <Link to={link} target="_blank">
            <GenericButton
              text={"Buy Tickets"}
              classes={"bg-gradient-to-r from-primary to-secondary text-white"}
            />    
            </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EventCard;
