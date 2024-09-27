const Booking = require('../models/booking');

const bookSeat = async (req, res) => {
  const { trainId } = req.body;
  const userId = req.user.userId; 
  const booking = await Booking.create(userId, trainId);
  res.status(201).json(booking);
};

const getBookingDetails = async (req, res) => {
  const userId = req.user.userId;
  const bookings = await Booking.getByUser(userId);
  res.status(200).json(bookings);
};

module.exports = { bookSeat, getBookingDetails };
