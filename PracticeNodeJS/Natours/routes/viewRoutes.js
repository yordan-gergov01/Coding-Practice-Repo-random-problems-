const express = require('express');

const {
  getOverview,
  getTour,
  getLoginForm,
  getSignupForm,
  getAccount,
  updateUserData,
} = require('./../controllers/viewsController');

const { protect, isLoggedIn } = require('./../controllers/authController');

const router = express.Router();

router.get('/', isLoggedIn, getOverview);

// because we want to see slug in the URL instead of id
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/signup', getSignupForm);
router.get('/me', protect, getAccount);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
