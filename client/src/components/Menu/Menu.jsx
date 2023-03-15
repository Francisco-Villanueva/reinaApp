import React from "react";
import Card from "./Card";
import "./Menu.css";
export default function Menu({ menu }) {
  console.log("MENU MENU: ", menu);
  return (
    <div className="menu-main ">
      <h3 className="scale-in-ver-top-14">MENÚ</h3>

      <div className="cards-container">
        {menu.map((b) => (
          <Card key={b.id} burger={b} />
        ))}
      </div>
    </div>
  );
}
