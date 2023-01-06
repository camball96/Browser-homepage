import React from "react";
import "./FavouriteModal.css";
import FavouriteForm from "../FavouriteForm/FavouriteForm";

function FavouriteModal({ closeModal }) {
  return (
    <div className="modal-outer">
      <div className="modal-container">
        <div className="close-btn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modal-content">
          <h1>Modal</h1>
          <FavouriteForm />
        </div>
      </div>
    </div>
  );
}

export default FavouriteModal;
