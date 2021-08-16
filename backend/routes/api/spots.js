const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Spot, Image } = require('../../db/models')

const router = express.Router();

// GET /api/spots
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ include: Image });
    res.json(spots);
  })
);

// GET /api/spots/:spotId
router.get('/:spotId', asyncHandler(async(req, res) => {
  const spotId = parseInt(req.params.spotId, 10)
  const spot = await Spot.findOne({
    where: spotId
  })

  res.json(spot)
}))

// POST /api/spots
// router.post('/', requireAuth, asyncHandler(async(req, res) => {

// }))

// PUT /api/spots/:spotId

// DELETE /api/spots/:spotId

module.exports = router;