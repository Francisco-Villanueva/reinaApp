const { data } = require("../data");

const burgerList = (req, res) => {
  try {
    res.status(200).json(data.burgers);
  } catch (error) {
    res.status(400).json(error);
  }
};
const crearPedido = (req, res) => {
  try {
    res.status(200).json(data.burgers);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  burgerList,
  crearPedido,
};
