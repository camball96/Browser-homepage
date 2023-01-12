import React, { useState } from "react";
import "./FavouriteForm.css";

function FavouriteForm(props) {
  // This is setting state to save the inputted fields for both the website name and URL
  const [siteData, setSiteData] = useState();
  const [linkData, setLinkData] = useState();

  // This is setting the state for the Name of the site
  const siteChangeHandler = (e) => {
    setSiteData(e.target.value);
  };

  // This is setting the state for the Link to the site
  const linkChangeHandler = (e) => {
    setLinkData(e.target.value);
  };

  // Submit handler handles the forms inputs and stores that new data into our array of 'favouriteData
  const submitHandler = (e) => {
    e.preventDefault();

    const favouriteData = {
      id: Math.random().toString(),
      site: siteData,
      link: "https://" + linkData,
      class: "shortcuts",
    };

    //Stores that favourite data array into a function from the parent component to pass that data up
    props.onSaveFormData(favouriteData);
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <label htmlFor="">Name</label>
      <input
        placeholder="Facebook"
        type="text"
        name=""
        id=""
        value={siteData}
        onChange={siteChangeHandler}
      />
      <label htmlFor="">URL</label>
      <input
        placeholder="facebook.com"
        type="text"
        name=""
        id=""
        value={linkData}
        onChange={linkChangeHandler}
      />
      <button>Add to Favourites</button>
    </form>
  );
}

export default FavouriteForm;
