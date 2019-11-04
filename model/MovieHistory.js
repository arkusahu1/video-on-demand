const mongoose = require('mongoose');

const movie_history_schema = new mongoose.Schema({
  movieId: {
    type: String,
    required: 'movieId is required',
    index: { unique: true }
  }
});

module.exports = mongoose.model('MovieHistory', movie_history_schema);