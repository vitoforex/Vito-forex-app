import React, { useState, useEffect } from "react";
import { WeekDropdown } from "../";
import axios from "axios";
import { formartDate } from "../../utils";
import "./styles.css";

const DailySetups = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [dailySetUps, setDailySetUps] = useState(null);

  useEffect(() => {
    async function getSetUps() {
      try {
        const response = await axios.get(
          "/forex-api/setup"
        );
        const setups = JSON.parse(response.data.setups);
        setDailySetUps(setups);
      } catch (error) {
        console.log(error);
      }
    }
    getSetUps();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row justify-between items-center w-[90%] pb-4">
        <div className="">
          <span className="text-gray-400">Daily Setup:</span>
        </div>
        <div className="">
          <WeekDropdown currentDayUpdater={setCurrentDay} />
        </div>
      </div>
      <div className="daily-setups scrollable bg-white p-4 max-h-[90vh] min-h-[90vh] overflow-auto rounded-xl shadow-lg w-[90%]">
        {dailySetUps === null ? (
          "Loading..."
        ) : currentDay >= dailySetUps.length ? (
          "That does not exist"
        ) : (
          <div>
            <div className="flex justify-between items-center pt-4">
              <div className="">
                <span className="text-gray-400 font-semi-bold">Date :</span>
              </div>
              <div className="">
                <span className="text-gray-700">
                  {formartDate(dailySetUps[currentDay].fields.date_created)}
                </span>
              </div>
            </div>
            <h2 className="font-semibold md:text-3xl text-2xl">
              {dailySetUps[currentDay].fields.title}
            </h2>
            <div
              className="daily-setup-content"
              dangerouslySetInnerHTML={{
                __html: dailySetUps[currentDay].fields.content,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DailySetups;
