const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots');
const bookingsRouter = require('./bookings');
const reviewsRouter = require('./reviews');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter)

router.use('/bookings', bookingsRouter)

router.use('/reviews', reviewsRouter)

// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;