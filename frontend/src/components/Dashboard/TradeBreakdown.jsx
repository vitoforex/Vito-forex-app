import React, { useState, useEffect } from "react";
import { Spinner, WeekDropdown } from "../";
import axios from "axios";
import { formartDate } from "../../utils";
import "./styles.css";

const TradeBreakdown = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [tradeBreakDown, setTradeBreakDown] = useState(null);

  useEffect(() => {
    async function getTradeBreakDowns() {
      try {
        const response = await axios.get(
          "/forex-api/tradebreakdown"
        );
        const trade_breakdowns = JSON.parse(response.data.trade_breakdowns);
        setTradeBreakDown(trade_breakdowns);
      } catch (error) {
        // console.log(error);
      }
    }
    getTradeBreakDowns();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row justify-between items-center w-[90%] pb-4">
        <div className="">
          <span className="text-gray-400">Trade Breakdown:</span>
        </div>
        <div className="">
          <WeekDropdown currentDayUpdater={setCurrentDay} parentComponent={'TradeBreakdown'} tradeBreakDowns={tradeBreakDown}/>
        </div>
      </div>
      <div className="daily-setups scrollable bg-white p-4 max-h-[90vh] min-h-[90vh] overflow-auto rounded-xl shadow-lg w-[90%]">
        {tradeBreakDown === null ? (
          <Spinner/>
        ) : currentDay >= tradeBreakDown.length ? (
          "That does not exist"
        ) : (
          <div>
            <div className="flex justify-between items-center pt-4">
              <div className="">
                <span className="text-gray-400 font-semi-bold">Date :</span>
              </div>
              <div className="">
                <span className="text-gray-700">
                  {formartDate(tradeBreakDown[currentDay].fields.date_created)}
                </span>
              </div>
            </div>
            <h2 className="font-semibold md:text-3xl text-2xl">
              {tradeBreakDown[currentDay].fields.title}
            </h2>
            <div
              className="daily-setup-content"
              dangerouslySetInnerHTML={{
                __html: tradeBreakDown[currentDay].fields.content,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TradeBreakdown