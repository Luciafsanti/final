const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Importa la instancia de Sequelize para la conexión a la base de datos

// Define el modelo de libros
class books extends Model { }

books.init(
  {
    // Definición de columnas de la tabla
    book_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // No permite valores nulos
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false, // No permite valores nulos
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: false, // No permite valores nulos
      unique: true, // Asegura que el valor de ISBN sea único
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Precio con hasta 10 dígitos y 2 decimales
      allowNull: false, // No permite valores nulos
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false, // No permite valores nulos
      defaultValue: 0, // Valor predeterminado
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false, // No permite valores nulos
      defaultValue: 'General', // Valor predeterminado
    },
  },
  {
    sequelize, // La conexión a la base de datos
    modelName: 'books', // Nombre del modelo
    tableName: 'libros', // Nombre de la tabla
    timestamps: false, // Deshabilita timestamps como `createdAt` y `updatedAt`
  }
);

module.exports = books;
