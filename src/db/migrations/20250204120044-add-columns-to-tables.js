module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("transactions", "by_name", {
      type: Sequelize.STRING,
      allowNull: true, // Sesuaikan dengan kebutuhan
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("transactions", "by_name");
  },
};
