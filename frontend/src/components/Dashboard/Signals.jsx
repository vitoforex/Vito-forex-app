import React, { useEffect, useState } from "react";
import axios from "axios";
import { SignalCard } from "..";
import {Spinner} from "..";

const Signals = () => {
  const [signals, setSignals] = useState(null);
  useEffect(() => {
    async function getSignals() {
      try {
        const response = await axios.get(
          "/forex-api/signals"
        );
        const convertedToJSArray = JSON.parse(response.data.signals);
        setSignals(convertedToJSArray);
      } catch (error) {
        // console.log(error);
      }
    }
    getSignals();
  }, []);
  
  return (
    <div className="flex items-center justify-center">
      {signals === null ? (
        <Spinner/>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1">
          {signals.map((signal, idx) => (
            <div className="" key={idx}>
              <SignalCard
                isNew={idx}
                buy={signal.fields.buy}
                sell={signal.fields.sell}
                sl={signal.fields.sl}
                tp={signal.fields.tp}
                risk={signal.fields.risk_disclosure}
                date={signal.fields.date_created}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Signals;
