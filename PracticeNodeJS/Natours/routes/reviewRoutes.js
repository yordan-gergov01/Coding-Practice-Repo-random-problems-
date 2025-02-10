const express = require('express');

const {
  getAllReviews,
  createNewReview,
  deleteReview,
  updateReview,
  setTourUserIds,
  getReview,
} = require('./../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), setTourUserIds, createNewReview);

router.route('/:id').get(getReview).patch(updateReview).delete(deleteReview);

module.exports = router;
