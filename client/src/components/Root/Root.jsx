import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import "./Root.css";
export default function Root({ menu }) {
  console.log("ROOT MENU: ", menu);
  return (
    <div className="root-main ">
      <Header />
      <Menu menu={menu} />
      <Footer />
    </div>
  );
}
