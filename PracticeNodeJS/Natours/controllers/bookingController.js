const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require('./../models/tourModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');

const {} = require('./handleFactory.js');

const getCheckoutSession = catchAsync(async function (req, res, next) {
  // 1) Get the currently booked tour
  const bookedTour = await Tour.findById(req.params.tourId);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${bookedTour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    mode: 'payment',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${bookedTour.name} Tour`,
            description: bookedTour.summary,
            images: [
              `http://www.natours.dev/img/tours/${bookedTour.imageCover}`,
            ],
          },
          unit_amount: bookedTour.price * 100, // Цената в центове
        },
      },
    ],
  });
  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

module.exports = { getCheckoutSession };
