const { Horarios } = require("../db");

const getDbInfo = async () => {

  const horarios = await Horarios.findAll();
  console.log("LISTA DE PEDIDOS: ", horarios);
  return horarios;
};
const getAllHorarios = async (req, res) => {
  try {
    const resp = await getDbInfo();
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
const createHorario = async (req, res) => {
  try {
    const { hora } = req.body;

    const newHorario = await Horarios.create({
      hora: hora,
    });
    res.status(200).json(newHorario);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllHorarios,
  createHorario,
};
