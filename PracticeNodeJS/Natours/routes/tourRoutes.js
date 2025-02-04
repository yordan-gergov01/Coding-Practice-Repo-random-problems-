const express = require('express');

const {
  getAllTours,
  getTour,
  createNewTour,
  updateTour,
  deleteTour,
} = require('./../controllers/tourController');

const router = express.Router();

// Save here for refference (uncomment and see the function's docs)
// router.param('id', checkId);

router.route('/').get(getAllTours).post(createNewTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
