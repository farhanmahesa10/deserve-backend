module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      "transactions",
      "pays_method",
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      { using: "pays_method::INTEGER" }
    ); // Konversi manual
    await queryInterface.addColumn("transactions", "by_name", {
      type: Sequelize.STRING,
      allowNull: false, // Sesuaikan dengan kebutuhan
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      "transactions",
      "pays_method",
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
      { using: "pays_method::TEXT" }
    ); // Konversi balik
    await queryInterface.removeColumn("transactions", "by_name", {
      type: Sequelize.STRING,
      allowNull: false, // Sesuaikan dengan kebutuhan
    });
  },
};
