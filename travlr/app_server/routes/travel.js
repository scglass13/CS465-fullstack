// app_server/routes/travel.js

const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

router.route('/:tripCode').get(travelController.tripDetails);

module.exports = router;
