import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./FavouriteCards.css";

function FavouriteCards(props) {
  return (
    <div className="favourite-section">
      <Card className="shortcuts">
        <h3 className="link-name">Google</h3>
        <Button link="https://www.google.com" name="Go!" />
      </Card>
      <Card className="shortcuts">
        <h3 className="link-name">Google</h3>
        <Button link="https://www.google.com" name="Go!" />
      </Card>
      <Card className="shortcuts">
        <h3 className="link-name">Google</h3>
        <Button link="https://www.google.com" name="Go!" />
      </Card>
      <Card className="add-cards">
        <button onClick={props.onButtonClick} className="add-card">
          +
        </button>
      </Card>
    </div>
  );
}

export default FavouriteCards;
