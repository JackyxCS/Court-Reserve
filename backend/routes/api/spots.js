const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, Image } = require('../../db/models')

const router = express.Router();

// GET /api/spots
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ include: Image });
    return res.json(spots);
  })
);

// GET /api/spots/:spotId
router.get('/:spotId', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.spotId, 10)
  const spot = await Spot.findOne({
    where: spotId
  })
  return res.json(spot)
}))

// POST /api/spots
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { name, address, city, state, country, price, imageURL: url } = req.body
  const { id: userId } = req.user
  const newCourt = await Spot.create({ userId, name, address, city, state, country, price });
  const { id: spotId } = newCourt
  await Image.create({ spotId, url })
  return res.redirect(`spots/${newCourt.id}`)
}))

// PUT /api/spots/:spotId

// DELETE /api/spots/:spotId

module.exports = router;