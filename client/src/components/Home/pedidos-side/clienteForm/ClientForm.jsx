import React from "react";
import { useState } from "react";
import "./ClientForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export default function ClientForm(props) {
  // const horas = useSelector((s) => s.horariosList);
  const [client, setClient] = useState({
    name: "",
    direccion: "",
    pago: "",
    entrega: "",
    bloque: "",
  });
  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const pushClientData = () => {
    if (
      !client.name ||
      !client.direccion ||
      !client.entrega ||
      !client.pago ||
      !client.bloque
    ) {
      return alert(`Faltan Datos`);
    }
    props.cliente.push(client);

    console.log("CLIENTE CARGADO:   ", client);
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
        {props.horas?.map((m) => (
          <option key={m.id} value={m.hora}>
            {m.hora}
          </option>
        ))}
      </select>

      <button className="btn-check" onClick={pushClientData}>
        <FontAwesomeIcon icon={faCheck} style={{ color: "#000" }} />
      </button>
    </div>
  );
}
