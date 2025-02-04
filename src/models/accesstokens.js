import { Sequelize } from "sequelize";
const AccessToken = {
  id_outlet: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  access_token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  refresh_token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ip_address: {
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

export default AccessToken;
