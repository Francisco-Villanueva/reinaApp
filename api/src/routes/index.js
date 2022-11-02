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

router.get("/menu", burgerList); //
router.get("/pedido", getAllPedidos); //
router.get("/pedido/:id", getPedidoById); //
router.put("/pedido/:id", editPedido); //
router.delete("/pedido/:id", deletePedido);//
router.post("/pedido", crearPedido);//

const {
  createBurger,
  deleteBurger,
  getAllBurgers,
  editBurger,
  getOneBurger
} = require("./burgerServices");

router.get("/burger", getAllBurgers)
router.post("/burger", createBurger)
router.get("/burger/:id", getOneBurger)
router.put("/burger/:id", editBurger)
router.delete("/burger/:id", deleteBurger)
module.exports = router;
