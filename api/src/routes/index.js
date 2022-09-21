const express = require("express");
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { burgerList, crearPedido } = require("./services");
router.get("/", burgerList);
router.get("/pedido", crearPedido);
module.exports = router;
