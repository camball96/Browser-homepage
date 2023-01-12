import React, { useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Time from "../components/Time/Time";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import FavouriteCards from "../components/FavouriteCards/FavouriteCards";
import FavouriteModal from "../components/FavouriteModal/FavouriteModal";

const shortcutData = [
  {
    id: 1,
    site: "Google",
    link: "https://www.google.com",
    class: "shortcuts",
  },
  {
    id: 2,
    site: "Google",
    link: "https://www.google.com",
    class: "shortcuts",
  },
  {
    id: 3,
    site: "Google",
    link: "https://www.google.com",
    class: "shortcuts",
  },
];

function Home() {
  const [faveCards, setFaveCards] = useState(shortcutData);
  const [openModal, setOpenModal] = useState(false);

  function addFavouriteshandler(favourites) {
    setFaveCards((prevFaveCards) => {
      return [favourites, ...prevFaveCards];
    });
  }

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
        <FavouriteCards faves={faveCards} onButtonClick={handleButtonClick} />
        {openModal && (
          <FavouriteModal
            onAddFavourite={addFavouriteshandler}
            closeModal={setOpenModal}
          />
        )}
      </section>
    </div>
  );
}

export default Home;
