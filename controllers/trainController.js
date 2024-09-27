 const Train = require('../models/train');

const addTrain = async (req, res) => {
  const { source, destination, seats } = req.body;
  const newTrain = await Train.create(source, destination, seats);
  res.status(201).json(newTrain);
};

const getSeatAvailability = async (req, res) => {
  const { source, destination } = req.query;
  const trains = await Train.getAvailability(source, destination);
  res.status(200).json(trains);
};

module.exports = { addTrain, getSeatAvailability };
