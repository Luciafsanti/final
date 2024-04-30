/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const category = require('./category');


class books extends Model { }

books.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: category,
        key: 'category_id',
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'books'
  }
);


books.belongsTo(category, { foreignKey: 'category_id', as: 'category' });

module.exports = books;*/

////////////////////////////////////

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      books.belongsTo(models.categories, { foreignKey: 'category_id' });

    }
  }
  books.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'category_id',
        },
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'books'
    }
  );
  return books;
};

/*
    detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    product_price FLOAT NOT NULL,
    total_detail FLOAT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (product_price) REFERENCES products(price)
*/