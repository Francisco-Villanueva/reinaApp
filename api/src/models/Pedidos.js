const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pedidos", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    burgers: {
      type: DataTypes.ARRAY(STRING),
    },
    price: {
      type: DataTypes.INTEGER,
    },
  });
};
