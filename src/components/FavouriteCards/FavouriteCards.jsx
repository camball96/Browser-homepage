import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./FavouriteCards.css";

function FavouriteCards(props) {
  const shortcut = [
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

  function createShortcut(x) {
    return (
      <Card className={x.class} key={x.id} site={x.site} link={x.link}>
        <h3 className="link-name">{x.site}</h3>
        <Button link={x.link} name="Go!" />
      </Card>
    );
  }

  return (
    <div className="favourite-section">
      {shortcut.map(createShortcut)}
      <Card className="add-cards">
        <button onClick={props.onButtonClick} className="add-card">
          +
        </button>
      </Card>
    </div>
  );
}

export default FavouriteCards;
