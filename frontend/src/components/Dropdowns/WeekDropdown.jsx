import React, { useEffect, useState } from "react";
import { formartDate } from "../../utils";

const WeekDropdown = ({
  currentDayUpdater,
  parentComponent,
  dailySetUps,
  tradeBreakDowns,
}) => {
  const [dates, setDates] = useState(null);
  function onChangeHandler(e) {
    currentDayUpdater(e.target.value);
  }

  useEffect(() => {
    if (parentComponent === "DailySetups") {
      if (dailySetUps) {
        let dates = dailySetUps.map((setup, idx) =>{
          return formartDate(setup.fields.date_created)}
        );
        setDates(dates);
      }
    } else {
      if (tradeBreakDowns) {
        let dates = tradeBreakDowns.map((trade, idx) =>
          formartDate(trade.fields.date_created)
        );
        setDates(dates);
      }
    }
  }, [dailySetUps, tradeBreakDowns]);

  return (
    <>
      <div className="relative w-full lg:max-w-sm">
        <select
          onChange={(e) => onChangeHandler(e)}
          className=" p-2.5 text-gray-500  border rounded-md shadow-sm outline-none  focus:border-primary"
        >
          {/*<option value={0}>Today</option>
                <option value={1}>Yesterday</option>
                <option value={2}>Day 5</option>
                <option value={3}>Day 4</option>
                <option value={4}>Day 3</option>
                <option value={5}>Day 2</option>
                <option value={6}>Day 1</option>*/}
          {dates === null
            ? "Loading..."
            : dates.map((date, idx) => <option value={idx}>{date}</option>)}
        </select>
      </div>
    </>
  );
};

export default WeekDropdown;
