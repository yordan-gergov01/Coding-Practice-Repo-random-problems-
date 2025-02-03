const Tour = require('./../models/tourModel.js');

// Reading file and use the data (for learning purposes)
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

function checkBody(req, res, next) {
  const { name, price } = req.body;

  if (!name || !price)
    return res.status(404).json({
      status: 'fail',
      message: 'Missing name or price',
    });

  next();
}

function getAllTours(req, res) {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
}

function getTour(req, res) {
  const { id } = req.params;
  // const tour = tours.find((tour) => tour.id === Number(id));

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
}

function createNewTour(req, res) {
  res.status(201).json({
    status: 'success',
    // data: {
    //   tour: newTour,
    // },
  });
}

function updateTour(req, res) {
  const { id } = Number(req.params);

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
}

function deleteTour(req, res) {
  res.status(204).json({
    status: 'success',
    data: null,
  });
}

module.exports = {
  getAllTours,
  getTour,
  createNewTour,
  updateTour,
  deleteTour,
  checkBody,
};
