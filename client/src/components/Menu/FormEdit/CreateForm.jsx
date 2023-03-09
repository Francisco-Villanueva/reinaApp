import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createBurger, editBurger } from "../../../actions";
import BackBtn from "../../Btn-backNavigate/BackBtn";
import { getBurgerInfo } from "../../../actions";
import "./CreateForm.css";
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
      <div className="form-main ">
        <BackBtn />

        <div className="burgerData-container color-change-2x scale-in-top">
          <div>
            <h3 className="tracking-in-expand ">COMPLETAR DATOS </h3>
          </div>
          <div className="body-form-cont">
            <div className="inputs-cont">
              <input
                className="inputEditBurg scale-in-hor-left"
                autoComplete="off"
                name="name"
                value={data.name}
                onChange={handleInput}
                type="text"
                placeholder="Nombre"
              />
              <input
                className="inputEditBurg scale-in-hor-left"
                autoComplete="off"
                name="description"
                value={data.description}
                onChange={handleInput}
                type="text"
                placeholder="Descripcion"
              />
              <input
                className="inputEditBurg scale-in-hor-left"
                autoComplete="off  "
                name="price"
                value={data.price}
                onChange={handleInput}
                type="number"
                placeholder="Precio"
              />
            </div>
            <div>
              <button
                className="btn-editBurg scale-in-ver-center"
                onClick={handleEdit}
              >
                {editing ? "Editar" : "Cargar "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
