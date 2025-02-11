const express = require('express');

const { getOverview, getTour } = require('./../controllers/viewsController');

const router = express.Router();

router.get('/', getOverview);

// because we want to see slug in the URL instead of id
router.get('/tour/:slug', getTour);

module.exports = router;
