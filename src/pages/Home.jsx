import React, { useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Time from "../components/Time/Time";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import FavouriteCards from "../components/FavouriteCards/FavouriteCards";
import FavouriteModal from "../components/FavouriteModal/FavouriteModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  function handleButtonClick() {
    setOpenModal(true);
  }
  return (
    <div>
      <Header />
      <section className="section">
        <Card className="temp-box">
          <WeatherCard />
        </Card>
        <Time />
        <FavouriteCards onButtonClick={handleButtonClick} />
        {openModal && <FavouriteModal closeModal={setOpenModal} />}
      </section>
    </div>
  );
}

export default Home;
