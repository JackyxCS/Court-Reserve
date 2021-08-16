'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    date: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
    Booking.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Booking;
};