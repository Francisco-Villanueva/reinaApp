import React from "react";
import "Prices.css";
export default function Prices(props) {
  return (
    <div>
      <button
        name={props.name}
        onClick={(e) => handleBurgers(e)}
        className="btn-add"
      >
        + $ {props.price}
      </button>
    </div>
  );
}
