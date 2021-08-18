const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Spot, Booking } = require('../../db/models')

const router = express.Router();

// GET user's bookings: /api/bookings
router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.user
  const bookings = await Booking.findAll({ where: { userId: id }, include: Spot })
  return res.json(bookings)
}))


// POST booking: /api/bookings
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { spotId, userId, startTime, endTime, date } = req.body
  const newBooking = await Booking.create({ spotId, userId, startTime, endTime, date })
  return res.json(newBooking)
}))


// UPDATE(PUT) booking: /api/bookings/:bookingId
router.put('/:bookingId', requireAuth, asyncHandler(async (req, res) => {
  const { userId, spotId, date, startTime, endTime } = req.body
  const bookingId = parseInt(req.params.bookingId, 10)
  const booking = await Booking.findOne({ where: { id: bookingId } })
  await booking.update({ userId, spotId, date, startTime, endTime })
  return res.json(booking)
}))


// DELETE booking: /api/bookings/:bookingId
router.delete('/:bookingId', requireAuth, asyncHandler(async (req, res) => {
  const bookingId = parseInt(req.params.bookingId, 10)
  const booking = await Booking.findOne({ where: { id: bookingId } })
  await booking.destroy()
  return res.json({ booking })
}))


module.exports = router;