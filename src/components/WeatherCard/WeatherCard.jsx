import React, { useState } from "react";
import axios from "axios";

function WeatherCard() {
  let iconURL = "https://openweathermap.org/img/wn/{}.png";
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();

  //Gets current weather temp for brisbane
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=brisbane&appid=2ffd9582b4b57a4f7c33fcb8f4e2e5c6&units=metric"
    )
    .then((response) => {
      setWeather(Math.round(response.data.main.temp));
      setIcon(
        "https://openweathermap.org/img/wn/" +
          response.data.weather[0].icon +
          ".png"
      );
    });

  return (
    <div>
      <img src={icon} width="50px" alt="" />
      <h3>Current Temp:</h3>
      <h3>{weather}°C</h3>
    </div>
  );
}

export default WeatherCard;

//  + ".png";
