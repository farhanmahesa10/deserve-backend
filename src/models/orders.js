import { Sequelize } from "sequelize";
const Orders = {
  id_menu: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  id_transaction: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW, // Set default to current timestamp
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW, // Set default to current timestamp
  },
};

export default Orders;
