import React from "react";

import { Card } from "./Card/Card";
import "./Testeando.css";

export function Testeando(props) {


  return (
    <div>
      
      <div className="menuContainer">
        {props.menu.map((burg) => (
          <Card
            name={burg.name}
            price={burg.price}
            description={burg.description}
            key={burg.id}
            types={burg.dietType}
          />
        ))}
      </div>
    </div>
  );
}


