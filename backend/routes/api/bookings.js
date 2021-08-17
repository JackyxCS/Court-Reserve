const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Spot, Booking } = require('../../db/models')

const router = express.Router();

// GET user's bookings: /api/bookings
router.get('/', requireAuth, asyncHandler(async(req,res) => {
  
}))


// POST booking: /api/bookings


// UPDATE(PUT) booking: /api/bookings/:bookingId


// DELETE booking: /api/bookings/:bookingId


module.exports = router;