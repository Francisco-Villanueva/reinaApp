const { data, data2 } = require("../data");
const { Pedidos, Burger } = require("../db");
const burgerList = (req, res) => {
  try {
    res.status(200).send(data2);
  } catch (error) {
    res.status(400).json(error);
  }
};

const dbInfoById = async (id) => {
  try {
    const info = await Pedidos.findOne({
      where:{
        id:id
      }
    })
    
  
    return info;
  }
   catch (error) {
    return error.message
  }
 
}

const getPedidoById = async (req, res) => {
  console.log('entramos el pedido por id')
  try {
    const { id } = req.params;
    const pedidoDetails = await dbInfoById(id);
    console.log(pedidoDetails)
    if (pedidoDetails.length === 0) {
      return res.status(404).send("Pedido no encontrado!");
    } else {
      res.status(200).json(pedidoDetails);
    }
  } catch (error) {
    console.log(error)
    res.status(404).send(error);
  }
};
const crearPedido = async (req, res) => {
  try {
    const { nombre, burgers, entrega, direccion } = req.body;
    if (!nombre || !burgers[0] || !entrega) {
      return res.status(400).send("error en los datos");
    }

    if (entrega === "envio" && !direccion) {
      return res.status(400).send("Falta la direccion!");
    }

    const cantidad = burgers.length;
    const newPedido = await Pedidos.create({
      nombre: nombre,
      cantidad: burgers,
      direccion: direccion,
      burgers: burgers,
      entrega: entrega,
      cantidad: cantidad,
    });
    console.log("Pedido agregado a nombre de: ", nombre);
    res.status(200).send(newPedido);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).send(error);
  }
};
const getDbInfo = async () => {
  // const info = await db.query("SELECT * FROM pedidos");

  const pedidos = await Pedidos.findAll();
  console.log("LISTA DE PEDIDOS: ", pedidos);
  return pedidos;
};
const getAllPedidos = async (req, res) => {
  try {
    const dbData = await getDbInfo();

    res.status(200).json(dbData);
  } catch (error) {
    res.status(404).send(error);
  }
};

const editPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, burgers, entrega, direccion } = req.body;

    const cantidad = burgers.length;
    const update = await Pedidos.update({
      nombre: nombre,
      cantidad: cantidad,
      burgers: burgers,
      direccion: direccion,
      entrega: entrega
    },
    {
      where:{
        id:id
      }
    })

    if (update.length === 0) {
      return res.status(404).send("Pedido no encontrado");
    }
    res.status(200).send("Pedido actualizado!");
  } catch (error) {
    res.status(400).send(error);
  }
};

const deletePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await dbInfoById(id)

    if (pedido.length === 0) {
      return res.status(404).send("Pedido no encontrado");
    } else {
      await Pedidos.destroy({
        where:{
          id:id
        }
      })
      return res.status(200).send("Pedido eliminado!");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = {
  burgerList,
  crearPedido,
  getAllPedidos,
  getPedidoById,
  editPedido,
  deletePedido,
};
