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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/pedidos" element={<PedidosList />} />
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
