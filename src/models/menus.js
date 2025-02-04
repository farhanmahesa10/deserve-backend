import { Sequelize } from "sequelize";
const Menus = {
  id_subcategory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  best_seller: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  details: {
    type: Sequelize.STRING,
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

export default Menus;
