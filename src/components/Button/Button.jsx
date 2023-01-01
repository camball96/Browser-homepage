import React from "react";
import "./Button.css";

function Button(props) {
  const className = "btn " + props.className;
  return (
    <a className="btn" href={props.link}>
      {props.name}
    </a>
  );
}

export default Button;
