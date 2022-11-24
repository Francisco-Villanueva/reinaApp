import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBurger } from "../../../actions";
import BackBtn from "../../Btn-backNavigate/BackBtn";

export default function CreateForms() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(createBurger(data));
    navigate("/menu");
  };
  return (
    <div>
      <div className="form-main">
        <BackBtn />

        <div className="burgerData-container">
          <h3>Completar datos :</h3>
          <input
            className="inputEditBurg"
            autoComplete="off"
            name="name"
            value={data.name}
            onChange={handleInput}
            type="text"
            placeholder="Nombre"
          />
          <input
            className="inputEditBurg"
            autoComplete="off"
            name="description"
            value={data.description}
            onChange={handleInput}
            type="text"
            placeholder="Descripcion"
          />
          <input
            className="inputEditBurg"
            autoComplete="off  "
            name="price"
            value={data.price}
            onChange={handleInput}
            type="number"
            placeholder="Precio"
          />
          <button className="btn-editBurg" onClick={handleEdit}>
            Cargar
          </button>
        </div>
      </div>
    </div>
  );
}
