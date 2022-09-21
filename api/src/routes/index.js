const express = require("express");
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  burgerList,
  crearPedido,
  getAllPedidos,
  getPedidoById,
  deletePedido,
  editPedido,
} = require("./services");
router.get("/menu", burgerList);
router.get("/pedido", getAllPedidos);
router.get("/pedido/:id", getPedidoById);
router.put("/pedido/:id", editPedido);
router.delete("/pedido/:id", deletePedido);
router.post("/pedido", crearPedido);
module.exports = router;

// RUTA
//http://localhost:4000/
