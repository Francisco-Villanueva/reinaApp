import logo from "./logo.svg";
import "./App.css";
import Testeando from "./components/Testeando";
import PedidosList from "./components/Pedidos/PedidosList";
import { Routes, Route } from "react-router-dom";
import AddPedido from "./components/Formulario/AddPedido";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Testeando />} />
        <Route exact path="/pedidos" element={<PedidosList />} />
        <Route exact path="/nuevoPedido" element={<AddPedido />} />
      </Routes>
    </div>
  );
}

export default App;
