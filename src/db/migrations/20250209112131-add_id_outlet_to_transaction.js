module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("transactions", "id_outlet", {
      type: Sequelize.STRING,
      allowNull: false, // Sesuaikan dengan kebutuhan
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("transactions", "id_outlet");
  },
};
