const User = require('./../models/userModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('./../utils/appError.js');

const { deleteOne, updateOne, getOne, getAll } = require('./handleFactory.js');

const filterObj = function (obj, ...allowedFields) {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

const updateMe = catchAsync(async function (req, res, next) {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not  allowed to be updated
  // we want this filter because the user can try to put incorrect data in req.body, for ex. role='admin'
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

const deleteMe = catchAsync(async function (req, res, next) {
  const deletedAccount = await User.findByIdAndUpdate(req.user.id, {
    active: false,
  });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

const createNewUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not defined! Please use /signup instead',
  });
};

const getUser = getOne(User);
const getAllUsers = getAll(User);

// Do NOT update passwords with this!
const updateUser = updateOne(User);
const deleteUser = deleteOne(User);

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
};
