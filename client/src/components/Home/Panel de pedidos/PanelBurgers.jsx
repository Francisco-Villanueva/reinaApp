import React from "react";
import { useEffect } from "react";
import "./PanelBurgers.css";

export default function (props) {
  useEffect(() => {
    console.log("recargue :)", props.burgas);
  }, [props.burgas.length]);
  return (
    <div>
      <div className="panel-container">
        <textarea value="pepe" rows={4} cols="1" />
      </div>
    </div>
  );
}
