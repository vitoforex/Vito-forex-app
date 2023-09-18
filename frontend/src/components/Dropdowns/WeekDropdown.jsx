import React from "react";

const WeekDropdown = ({currentDayUpdater}) => {
    function onChangeHandler(e){
        console.log(e.target.value)
        currentDayUpdater(e.target.value);
    }
  return (
    <>
      <div className="relative w-full lg:max-w-sm">
            <select onChange={(e)=>onChangeHandler(e)} className=" p-2.5 text-gray-500  border rounded-md shadow-sm outline-none  focus:border-primary">
                <option value={0}>Today</option>
                <option value={1}>Yesterday</option>
                <option value={2}>Day 5</option>
                <option value={3}>Day 4</option>
                <option value={4}>Day 3</option>
                <option value={5}>Day 2</option>
                <option value={6}>Day 1</option>
            </select>
        </div>
    </>
  );
};

export default WeekDropdown;
