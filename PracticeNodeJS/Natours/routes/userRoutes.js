const express = require('express');

const {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require('./../controllers/userController');

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);

router.route('/').get(getAllUsers).post(createNewUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
