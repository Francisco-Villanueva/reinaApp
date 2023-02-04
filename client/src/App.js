import "./App.css";
import PedidosList from "./components/Pedidos/PedidosList";
import { Routes, Route } from "react-router-dom";
import AddPedido from "./components/Formulario/AddPedido";
import Home from "./components/Home/Home";
import { PedidosPorBloque } from "./components/Pedidos/PedidosPorBloque";
import Landing from "./components/LandingPage/Landing";
import Menu from "./components/Menu/Menu";
import EditForm from "./components/Menu/FormEdit/EditForm";
import CreateForm from "./components/Menu/FormEdit/CreateForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPedidos } from "./actions";

function App() {
   // cosas para cargar como props al "PedidosList"
   let entregados = useSelector((s) => s.pedidosEntregados);
   const pedidosCargados = useSelector((s) => s.pedidosLoaded);
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(getPedidos());
    // dispatch(getMenu());
  }, [pedidosCargados]);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home entrega2={entregados} p={pedidosCargados}  />} />
        <Route exact path="/pedidos" element={<PedidosList entrega2={entregados} p={pedidosCargados} />} />
        <Route exact path="/pedidosBloque " element={<PedidosPorBloque />} />
        <Route exact path="/nuevoPedido" element={<AddPedido />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/editburger/:id" element={<EditForm />} />
        <Route exact path="/createBurger" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
