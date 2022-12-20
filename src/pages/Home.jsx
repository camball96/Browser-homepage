import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Time from "../components/Time/Time";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import createTime from "../components/Time/Time";
import FavouriteCards from "../components/FavouriteCards/FavouriteCards";

function Home() {
  return (
    <div onLoad={createTime}>
      <Header />
      <section className="section">
        <Card className="temp-box">
          <WeatherCard />
        </Card>
        <Time />
        <FavouriteCards />
      </section>
    </div>
  );
}

export default Home;
