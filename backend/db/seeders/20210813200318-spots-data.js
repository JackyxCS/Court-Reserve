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
    return queryInterface.bulkInsert('Spots', [{ userId: 1, address: '3524 War Memorial St', city: 'Houston', state: 'Texas', country: 'US', lat: 29.823478, lng: -95.613592, name: 'Bear Creek Pioneers Park Tennis Court', price: 5 },
    { userId: 1, address: '9506 S Gessner Rd', city: 'Houston', state: 'Texas', country: 'US', lat: 29.678670, lng: -95.530720, name: 'Lee LeClear Tennis Center Park', price: 10 },
    { userId: 1, address: '1500 E Memorial Loop Dr', city: 'Houston', state: 'Texas', country: 'US', lat: 29.776330, lng: -95.429050, name: 'Memorial Park Tennis Center', price: 10 },
    { userId: 2, address: '1200 Wilcrest Dr', city: 'Houston', state: 'Texas', country: 'US', lat: 29.750280, lng: -95.575060, name: 'Club Westside', price: 20 },
    { userId: 2, address: '12803 Mcswain Rd', city: 'Cypress', state: 'Texas', country: 'US', lat: 29.983010, lng: -95.623350, name: 'Kluge Tennis Center', price: 15 },
    { userId: 2, address: '7800 Johnny Morris Rd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.314470, lng: -97.641340, name: 'Austin Tennis Center', price: 15 },
    { userId: 2, address: '4201 Brookview Rd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.2970381, lng: -97.7095152, name: 'Pharr Tennis Center', price: 15 },
    { userId: 2, address: '2312 Shoal Creek Blvd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.2878286, lng: -97.752346, name: 'Caswell Tennis Center', price: 15 },
    { userId: 2, address: '1000 Cumberland Rd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.239996, lng: -97.766101, name: 'South Austin Tennis Center', price: 15 },
    { userId: 3, address: '1717 W Cesar Chavez St', city: 'Austin', state: 'Texas', country: 'US', lat: 30.27190589904785, lng: -97.76402282714844, name: 'Austin High Tennis Center', price: 15 },
    { userId: 3, address: '2499 Steiner St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.792128, lng: -122.436282, name: 'Alta Plaza Tennis Court', price: 15 },
    { userId: 3, address: '1600 Holloway Ave', city: 'San Francisco', state: 'California', country: 'US', lat: 37.7245167, lng: -122.4800002, name: 'SFSU Tennis Courts', price: 15 },
    { userId: 3, address: '1200 Greenwhich St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.801122, lng: -122.419596, name: 'Alice Marble Tennis Courts', price: 15 },
    { userId: 3, address: '3753 18th St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.76127, lng: -122.4273142, name: 'Mission Dolores Park Tennis Courts', price: 15 },
    { userId: 3, address: '1321 Taraval St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.742645263671875, lng: -122.48506164550781, name: 'McCoppin Park Tennis Courts', price: 15 },
    { userId: 3, address: '201 S Rengstorff Ave', city: 'Mountain View', state: 'California', country: 'US', lat: 37.40060806274414, lng: -122.09899139404297, name: 'Rengstorff Park Tenni Courts', price: 15 },
    { userId: 3, address: '685 Cuesta Dr', city: 'Moutain View', state: 'California', country: 'US', lat: 37.3737002, lng: -122.0815884, name: 'Mountain View Tennis', price: 15 },
    { userId: 3, address: '3203 W Morten Ave', city: 'Phoenix', state: 'Arizona', country: 'US', lat: 33.5475694, lng: -112.1281272, name: 'Mariposa Park Tennis Courts', price: 15 },
    { userId: 3, address: '4700 Warner Rd', city: 'Phoenix', state: 'Arizona', country: 'US', lat: 33.330832, lng: -111.980833, name: 'Ahwatukee Tennis Club', price: 15 },
    { userId: 3, address: '6268 W Thunderbird Rd', city: 'Glendale', state: 'Arizona', country: 'US', lat: 33.6107657, lng: -112.1935904, name: 'Paseo Racquet Center', price: 15 },
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
