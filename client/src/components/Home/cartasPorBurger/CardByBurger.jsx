import React from "react";

import { Card } from "../../Card/Card";

export function CardByBurger(props) {
  console.log(props);
  return (
    <div>
      <div className="menuContainer">
        <div className="style-container">
          CLASICA
          <ol>
            {props.menu.clasic.map((burg) => (
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
