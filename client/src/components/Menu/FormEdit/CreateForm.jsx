import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createBurger, editBurger } from "../../../actions";
import BackBtn from "../../Btn-backNavigate/BackBtn";
import { getBurgerInfo } from "../../../actions";

export default function CreateForms({ editing }) {
  // console.log(editing);
  const { id } = useParams();
  const dispatch = useDispatch();
  const b = useSelector((s) => s.burgerData);

  // console.log("AAAA  : ", b);
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
    editing ? dispatch(editBurger(id, data)) : dispatch(createBurger(data));
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
