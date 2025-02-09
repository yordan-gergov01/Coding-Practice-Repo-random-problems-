const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const getAllReviews = catchAsync(async function (req, res, next) {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    results: reviews.length(),
    data: {
      reviews,
    },
  });
});

const createNewReview = catchAsync(async function (req, res, next) {
  const newReview = await Review.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});

module.exports = {
  getAllReviews,
  createNewReview,
};
