/* PARAMS TO CREATE BURGER
name, description, id, price
*/
const { Burger } = require("../db");

const getDbInfo = async () => {
  // const info = await db.query("SELECT * FROM pedidos");

  const burgers = await Burger.findAll();
  console.log("LISTA DE PEDIDOS: ", burgers);
  return burgers;
};
const getAllBurgers = async (req, res) => {
  try {
    const allBurgers = await getDbInfo();
    res.status(200).json(allBurgers);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getOneBurger = async (req, res) => {
  try {
    const { id } = req.params;
    const burg = await dbInfoById(id);

    if (burg.length === 0) {
      return res.status(404).send("Burger not found!");
    } else {
      res.status(200).json(burg);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
const createBurger = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).send("missing data!");
    }

    const newBurger = await Burger.create({
      name: name,
      description: description,
      price: price,
    });

    res.status(200).send(newBurger);
  } catch (error) {
    res.status(400).send(error);
  }
};

const dbInfoById = async (id) => {
  try {
    const info = await Burger.findOne({
      where: {
        id: id,
      },
    });

    return info;
  } catch (error) {
    return error.message;
  }
};
const editBurger = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, carnes } = req.body;

    const burgerUpdated = await Burger.update(
      {
        name: name,
        description: description,
        price: price,
        carnes: carnes,
      },
      { where: { id: id } }
    );

    if (burgerUpdated.length === 0) {
      return res.status(404).send("Pedido no encontrado");
    }

    res.status(200).send("Burger " + name + " actualizada!");
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteBurger = async (req, res) => {
  try {
    const { id } = req.params;
    const burger = await dbInfoById(id);

    if (burger.length === 0) {
      return res.status(400).send("Burger not found!");
    } else {
      await Burger.destroy({
        where: {
          id: id,
        },
      });

      return res.status(200).send("Burger deleted!");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createBurger,
  deleteBurger,
  getAllBurgers,
  editBurger,
  getOneBurger,
};
