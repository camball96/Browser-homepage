import React from "react";

import sunny from "../../assets/sunny.png";

function WeatherCard() {
  return (
    <div>
      <img src={sunny} width="50px" alt="" />
      <h3>Current Temp:</h3>
      <h3>20°C</h3>
    </div>
  );
}

export default WeatherCard;
