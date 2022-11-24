import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useParams, useNavigate } from "react-router-dom";
import { editBurger, getBurgerInfo } from "../../../actions";
import BackBtn from "../../Btn-backNavigate/BackBtn";
import "./EditForm.css";
export default function EditForm(props) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const burgData = useSelector((s) => s.burgerData);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    carnes: "",
  });
  useEffect(() => {
    dispatch(getBurgerInfo(id));
    console.log("BURGA: ", burgData);
  }, []);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editBurger(id, data));
    navigate("/menu");
  };

  return (
    <div className="form-main">
      <BackBtn />
      <h2>Editar Burger</h2>
      <div>
        <p>{burgData.name}</p>
        <p>{burgData.description}</p>
        <p>$ {burgData.price}</p>
      </div>
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
          autoComplete="off"
          name="carnes"
          value={data.carnes}
          onChange={handleInput}
          type="text"
          placeholder="Carnes"
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
  );
}
