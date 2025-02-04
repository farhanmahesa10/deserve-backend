import { Sequelize } from "sequelize";
const Profiles = {
  id_outlet: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cafe_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  history: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  logo: {
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

export default Profiles;
