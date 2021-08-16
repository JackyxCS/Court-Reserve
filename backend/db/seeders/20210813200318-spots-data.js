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
    return queryInterface.bulkInsert('Spots', [
      { userId: 1, address: '3524 War Memorial St', city: 'Houston', state: 'Texas', country: 'US', lat: 29.823478, lng: -95.613592, name: 'Bear Creek Pioneers Park Tennis Court', price: 5 },
      { userId: 1, address: '9506 S Gessner Rd', city: 'Houston', state: 'Texas', country: 'US', name: 'Lee LeClear Tennis Center Park', price: 10 },
      { userId: 1, address: '1500 E Memorial Loop Dr', city: 'Houston', state: 'Texas', country: 'US', name: 'Memorial Park Tennis Center', price: 10 },
      { userId: 2, address: '1200 Wilcrest Dr', city: 'Houston', state: 'Texas', country: 'US', name: 'Club Westside', price: 20 },
      { userId: 3, address: '12803 Mcswain Rd', city: 'Cypress', state: 'Texas', country: 'US', name: 'Kluge Tennis Center', price: 15 },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Spots', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
