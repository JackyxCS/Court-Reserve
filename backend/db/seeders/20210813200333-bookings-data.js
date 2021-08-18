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
    return queryInterface.bulkInsert('Bookings', [{ spotId: 4, userId: 1, startTime: '13:00', endTime: '15:00', date: '2021-10-21' },
    { spotId: 5, userId: 1, startTime: '10:00', endTime: '11:00', date: '2021-10-22' },
    { spotId: 1, userId: 2, startTime: '8:00', endTime: '10:00', date: '2021-10-23' },
    { spotId: 1, userId: 3, startTime: '8:00', endTime: '10:00', date: '2021-10-25' },
    { spotId: 2, userId: 3, startTime: '8:00', endTime: '10:00', date: '2021-10-27' },
    { spotId: 3, userId: 3, startTime: '8:00', endTime: '10:00', date: '2021-10-29' },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Bookings', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
