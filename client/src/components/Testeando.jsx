import React from "react";

import { Card } from "./Card/Card";
import "./Testeando.css";

export function Testeando(props) {
  return (
    <div>
      <div className="menuContainer">
        {props.menu.map((burg) => (
          <Card
            key={burg.id}
            name={burg.name}
            price={burg.price}
            description={burg.description}
            types={burg.dietType}
            addBurga={props.addBurga}
          />
        ))}
      </div>
    </div>
  );
}
