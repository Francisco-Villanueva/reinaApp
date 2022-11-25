import React from "react";
import { useState } from "react";
import "./ClientForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function ClientForm(props) {
  const [client, setClient] = useState({
    name: "",
    direccion: "",
    pago: "",
    entrega: "",
    bloque: 0,
  });
  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const pushClientData = () => {
    if (!client.name || !client.direccion || !client.entrega || !client.pago) {
      return alert(`Faltan Datos`);
    }
    props.cliente.push(client);
    alert(`Cliente: ${client.name} cargado con éxito!`);
  };

  return (
    <div className="client-container">
      <input
        autoComplete="off"
        name="name"
        value={client.name}
        className="clientData"
        type="text"
        placeholder="Nombre"
        onChange={handleChange}
      />
      <select
        value={client.pago}
        className="clientData"
        name="pago"
        onChange={handleChange}
        placeholder="Pago"
      >
        <option value="pagoS">Pago</option>
        <option value="Efectivo">Efectivo</option>
        <option value="Transferencia">Transferencia</option>
      </select>
      <select
        value={client.entrega}
        className="clientData"
        name="entrega"
        onChange={handleChange}
        placeholder="Envio"
      >
        <option value="entregaS ">Entrega</option>
        <option value="Retiro">Retiro</option>
        <option value="Envío">Envío</option>
      </select>

      <input
        autoComplete="off"
        name="direccion"
        value={client.direccion}
        className="clientData"
        type="text"
        placeholder="Direccion"
        onChange={handleChange}
      />

      <select
        value={client.bloque}
        className="clientData"
        name="bloque"
        onChange={handleChange}
        placeholder="Bloque"
        itemType="time"
      >
        <option value="20:30">20:30</option>
        <option value="20:45">20:45</option>
        <option value="21:00">21:00</option>
        <option value="21:15">21:15</option>
        <option value="21:30">21:30</option>
        <option value="21:45">21:45</option>
        <option value="22:00">22:00</option>
        <option value="22:15">22:15</option>
        <option value="22:30">22:30</option>
        <option value="22:45">22:45</option>
        <option value="23:00">23:00</option>
      </select>

      <button className="btn-check" onClick={pushClientData}>
        <FontAwesomeIcon icon={faCheck} style={{ color: "#000" }} />
      </button>
    </div>
  );
}
