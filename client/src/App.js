import "./App.css";
import PedidosList from "./components/Pedidos/PedidosList";
import { Routes, Route } from "react-router-dom";
import AddPedido from "./components/Formulario/AddPedido";
import Home from "./components/Home/Home";
import { PedidosPorBloque } from "./components/Pedidos/PedidosPorBloque";
import Landing from "./components/LandingPage/Landing";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/pedidos" element={<PedidosList />} />
        <Route exact path="/pedidosBloque " element={<PedidosPorBloque/>} />
        <Route exact path="/nuevoPedido" element={<AddPedido />} />
      </Routes>
    </div>
  );
}


export default App
