 const express = require('express');
const { bookSeat, getBookingDetails } = require('../controllers/bookingController');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

router.post('/book', authenticateJWT, bookSeat);
router.get('/details', authenticateJWT, getBookingDetails);

module.exports = router;
