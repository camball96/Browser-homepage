import React from "react";
import Card from "../Card/Card";
import "./FavouriteCards.css";

function FavouriteCards() {
  return (
    <div className="favourite-section">
      <Card className="shortcuts">
        <h3 className="link-name">Google</h3>
        <a href="https://www.google.com">Go!</a>
      </Card>
      <Card className="shortcuts">
        <h3 className="link-name">Google</h3>
        <a href="https://www.google.com">Go!</a>
      </Card>
      <Card className="shortcuts">
        <h3 className="link-name">Google</h3>
        <a href="https://www.google.com">Go!</a>
      </Card>
    </div>
  );
}

export default FavouriteCards;
