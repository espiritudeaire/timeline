const express = require('express');
const router = express.Router();
const test_dates_controller = require('../controllers/test_dates_Controller');

router.get('/getYears', test_dates_controller.getYears);

module.exports = router;