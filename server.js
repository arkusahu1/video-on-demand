const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');
const path = require('path');
const cors = require('cors');

const app = express();

// Database connection
require('./mongo');

// Models
require('./model/MovieHistory');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/history', require('./routes/history'));

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Not found route
app.use((req, res, next) => {
  req.status = 404;
  const error = new Error('Routes not found');
  next(error);
});

app.use((error, req, res, next) => { // eslint-disable-line
  res.status(req.status || 500).send({
    message: error.message,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
