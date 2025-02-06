const User = require('./../models/userModel.js');
const catchAsync = require('../utils/catchAsync.js');

const getAllUsers = catchAsync(async function (req, res, next) {
  const users = await User.find();

  // Send response
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

const getUser = function (req, res) {
  res.status(500).json({
    status: 'fail',
    data: {
      message: 'This route is not defined',
    },
  });
};

const createNewUser = function (req, res) {
  res.status(500).json({
    status: 'fail',
    data: {
      message: 'This route is not defined',
    },
  });
};

const updateUser = function (req, res) {
  res.status(500).json({
    status: 'fail',
    data: {
      message: 'This route is not defined',
    },
  });
};

const deleteUser = function (req, res) {
  res.status(500).json({
    status: 'fail',
    data: {
      message: 'This route is not defined',
    },
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
