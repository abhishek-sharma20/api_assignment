const pool = require('../config/db');

const Train = {
  create: async (source, destination, seats) => {
    const res = await pool.query('INSERT INTO trains (source, destination, seats) VALUES ($1, $2, $3) RETURNING *', [source, destination, seats]);
    return res.rows[0];
  },
  getAvailability: async (source, destination) => {
    const res = await pool.query('SELECT * FROM trains WHERE source = $1 AND destination = $2', [source, destination]);
    return res.rows;
  },
};

module.exports = Train;
