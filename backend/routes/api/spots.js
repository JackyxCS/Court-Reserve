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
  return res.json(newCourt)
}))

// PUT /api/spots/:spotId
router.put('/:spotId', requireAuth, asyncHandler(async (req, res) => {
  const { name, address, city, state, country, price, imageURL: url } = req.body
  const { id: userId } = req.user
  const updatedCourt = await Spot.update({ userId, name, address, city, state, country, price })
  const { id: spotId } = updatedCourt
  await Image.create({ spotId, url })
  return res.json(updatedCourt);
}))

// DELETE /api/spots/:spotId
router.delete('/:spotId', requireAuth, asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.spotId, 10)
  // const { id: userId } = req.user
  const spot = await Spot.findOne({ where: { id: spotId } })
  const image = await Image.findOne({ where: { spotId: spotId } })
  await image.destroy()
  await spot.destroy()
  return res.json({ spot })
}))

module.exports = router;