const cards = require('../../Data/card');

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
    for (let i = 0; i < cards.length; i++) {
      await queryInterface.bulkInsert('Cards', [{
        question: cards[i].question,
        answer: cards[i].answer,
        price: cards[i].price,
        topic_id: cards[i].topic_id,
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
