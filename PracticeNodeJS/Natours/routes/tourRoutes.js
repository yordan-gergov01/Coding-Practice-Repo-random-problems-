const express = require('express');

const {
  getAllTours,
  getTour,
  createNewTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('./../controllers/tourController');
const { protect, restrictTo } = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();
// Save here for refference (uncomment and see the function's docs)
// router.param('id', checkId);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews
// GET /tour/234fad4/reviews/94887fda

router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'admin-guide', 'guide'), getMonthlyPlan);

router.route('/tour-stats').get(getTourStats);

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), createNewTour);

router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
