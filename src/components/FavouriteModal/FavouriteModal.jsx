import React from "react";
import "./FavouriteModal.css";
import FavouriteForm from "../FavouriteForm/FavouriteForm";

function FavouriteModal(props) {
  // This is our function that we use to pass the array from the child form component to this parent component
  const formData1 = (enteredFavouriteData) => {
    const favouriteData = {
      ...enteredFavouriteData,
      id: Math.random().toString(),
    };
    props.onAddFavourite(favouriteData);
  };

  return (
    <div className="modal-outer">
      <div className="modal-container">
        <div className="close-btn">
          <button className="exit" onClick={() => props.closeModal(false)}>
            X
          </button>
        </div>
        <div className="modal-content">
          <h1 className="modal-heading">Modal</h1>
          <FavouriteForm onSaveFormData={formData1} exit={props.closeModal} />
        </div>
      </div>
    </div>
  );
}

export default FavouriteModal;
