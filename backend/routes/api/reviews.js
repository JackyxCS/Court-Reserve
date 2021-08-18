const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Review, Spot } = require('../../db/models')

const router = express.Router();

// GET /api/reviews
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({ include: Spot });
    return res.json(reviews);
  })
);

// POST /api/reviews
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const {userId, spotId, review, rating} = req.body
  const newReview = await Review.create({userId, spotId, review, rating})
  return res.json(newReview)
}))

// UPDATE /api/reviews/:reviewId

// DELETE /api/reviews/:reviewId

module.exports = router;