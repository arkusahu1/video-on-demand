const router = require('express').Router();
const mongoose = require('mongoose');
const MovieHistory = mongoose.model('MovieHistory');

router.get('/', async (req, res) => {
  const movieHistory = await MovieHistory.find({});
  res.send(movieHistory);
});

router.post('/', async (req, res) => {
  const movieHistoryData = await MovieHistory.find({});
  const dataIndex = movieHistoryData.findIndex(data => data.movieId === req.body.movieId);
  if (dataIndex === -1) {
    const movieHistory = new MovieHistory();
    movieHistory.movieId = req.body.movieId;
    await movieHistory.save();
    res.send(movieHistory);
  } else {
    res.send(movieHistoryData[dataIndex]);
  }
});

module.exports = router;