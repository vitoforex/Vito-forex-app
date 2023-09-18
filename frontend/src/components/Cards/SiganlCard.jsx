import React from "react";
import { formartDate } from "../../utils";

const SiganlCard = ({isNew, sell, sl, tp, risk, date}) => {
  return (
    <div className="card p-4 m-2 rounded-lg shadow-xl w-80 bg-white">
      <div className="flex justify-between">
        <div className="">
          <span className="font-extrabold text-primary">Vito Forex</span>
        </div>
        
        {
            isNew === 0 ? (<div className="bg-green-500 px-4"> <span className="text-white">New</span> </div>): (<div className="bg-red-500 px-4"> <span className="text-white">Old</span> </div>)
        }
      </div>
      <div className="py-4">
        <table>
          <tbody>
            <tr>
              <td className="pr-6 font-semibold">SELL</td>
              <td>: {sell}</td>
            </tr>
            <tr>
              <td className="pr-6 font-semibold">SL:</td>
              <td>: {sl}</td>
            </tr>
            <tr>
              <td className="pr-6 font-semibold">TP</td>
              <td>: {tp}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <div className="" dangerouslySetInnerHTML={{__html:risk}}/>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="">
          <span className="text-gray-400 font-semi-bold">Date :</span>
        </div>
        <div className="">
          <span className="text-gray-700">{formartDate(date)}</span>
        </div>
      </div>
    </div>
  );
};

export default SiganlCard;
