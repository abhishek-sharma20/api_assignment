const express = require('express');
const { addTrain, getSeatAvailability } = require('../controllers/trainController');
const apiKeyAuth = require('../middleware/apiKeyAuth');
const router = express.Router();

router.post('/add', apiKeyAuth, addTrain);
router.get('/availability', getSeatAvailability);

module.exports = router;
