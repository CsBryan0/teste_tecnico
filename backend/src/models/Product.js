// import { Sequelize, DataType, DataTypes } from "sequelize";

// const sequelize = new Sequelize('sqlite::memory')
// const Product = sequelize.define('product', {
//     code: DataTypes.BIGINT,
//     sales_price: DataTypes.DECIMAL
// })

// module.exports = { Product }

// backend/models/Product.js

const { DataTypes } = require('sequelize');
const sequelize = require('../services/database');

const Product = sequelize.define('Product', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  costPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
