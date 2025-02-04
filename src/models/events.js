import { Sequelize } from "sequelize";
const Events = {
  id_outlet: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descriptions: {
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

export default Events;
