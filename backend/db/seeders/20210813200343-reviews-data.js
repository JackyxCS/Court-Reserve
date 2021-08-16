'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Reviews', [
      { userId: 1, spotId: 1, review: 'These courts are well maintained!', rating: 5 },
      { userId: 1, spotId: 2, review: 'Nice courts but pretty busy most nights', rating: 4 },
      { userId: 3, spotId: 3, review: 'Lots of courts but large cracks in most of them', rating: 3 },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
