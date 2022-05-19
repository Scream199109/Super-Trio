const topics = require('../../Data/topic');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    for (let i = 0; i < topics.length; i++) {
      await queryInterface.bulkInsert('Topics', [{
        // id: topics[i].id,
        name: topics[i].name,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
