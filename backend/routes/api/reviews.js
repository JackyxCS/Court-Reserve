const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Review, Spot, User } = require('../../db/models')

const router = express.Router();

// GET /api/reviews
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({ include: [Spot, User] });
    return res.json(reviews);
  })
);

// POST /api/reviews
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { userId, spotId, review, rating } = req.body
  const newReview = await Review.create({ userId, spotId, review, rating })
  return res.json(newReview)
}))

// DELETE /api/reviews/:reviewId
router.delete('/:reviewId', requireAuth, asyncHandler(async (req, res) => {
  const reviewId = parseInt(req.params.reviewId, 10)
  const review = await Review.findOne({ where: { id: reviewId } })
  await review.destroy()
  return res.json({ review })
}))

module.exports = router;