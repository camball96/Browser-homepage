import React, { useState, useEffect } from "react";
import "./Time.css";

function Time() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let newTime = new Date().toLocaleTimeString("en-AU", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setTime(newTime);
    }, 1000);
  }, []);

  return (
    <div>
      <h3 className="timeHeading">Current time in Brisbane is</h3>
      <h2 className="time" id="time">
        {time}
      </h2>
    </div>
  );
}

export default Time;
