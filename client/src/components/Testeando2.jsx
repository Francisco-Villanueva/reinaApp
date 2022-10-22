import React from "react";

import { Card } from "./Card/Card";
import "./Testeando2.css";

export function Testeando2(props) {
  console.log(props);
  return (
    <div>
      <div className="menuContainer">
        <div className="style-container">
          {props.menu.name}
          <ol>
            {props.menu.size.map((burg) => (
              <ul>
                <Card
                  key={burg.id}
                  name={burg.name}
                  price={burg.price}
                  description={burg.description}
                  types={burg.dietType}
                  addBurga={props.addBurga}
                />
              </ul>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
