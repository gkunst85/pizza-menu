import React from "react";

export default function Pizza(props) {
  return (
    <div className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
    </div>
  );
}
