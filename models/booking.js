const pool = require('../config/db');

const Booking = {
  create: async (userId, trainId) => {
    const res = await pool.query('INSERT INTO bookings (user_id, train_id) VALUES ($1, $2) RETURNING *', [userId, trainId]);
    return res.rows[0];
  },
  getByUser: async (userId) => {
    const res = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
    return res.rows;
  },
};

module.exports = Booking;
