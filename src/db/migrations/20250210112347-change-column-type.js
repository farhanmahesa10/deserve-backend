module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("transactions", "pays_method", {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("transactions", "pays_method", {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    });
  },
};
