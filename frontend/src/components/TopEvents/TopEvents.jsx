import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Loaders/Spinner";
import EventCard from "../Cards/EventCard";

const TopEvents = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get("/events-api/events/");
        setEvents(response.data.events.slice(0, 3));
      } catch (error) {
        console.log("couldn't fetch events");
      }
    };
    getEvents();
  }, []);

  if (Array.isArray(events) && events.length === 0) {
    return <p className="text-black text-center">No Events!</p>;
  }
  return (
    <>
      {events === null ? (
        <Spinner />
      ) : (
        <div className="flex flex-col justify-center items-center py-6">
          {events.map((event, idx) => (
            <EventCard
              title={event.title}
              image={event.event_image}
              date={event.date}
              venue={event.venue}
              link={event.link}
              key={idx}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TopEvents;
