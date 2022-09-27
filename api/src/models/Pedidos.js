const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pedidos", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      // AllowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      // AllowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    burgers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    entrega: {
      type: DataTypes.STRING,
    },
  });
};
