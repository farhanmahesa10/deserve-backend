import { Sequelize } from "sequelize";
const Tables = {
  id_outlet: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  number_table: {
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

export default Tables;
