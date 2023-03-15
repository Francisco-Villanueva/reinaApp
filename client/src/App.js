import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root/Root";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBurgers, getMenu } from "./redux/actions";
function App() {
  const burgerMenu = useSelector((s) => s.burgersMenu);
  const dispatch = useDispatch();
  // console.log("MENU: ", burgerMenu);
  useEffect(() => {
    dispatch(getMenu());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root menu={burgerMenu} />} />
      </Routes>
    </div>
  );
}

export default App;
